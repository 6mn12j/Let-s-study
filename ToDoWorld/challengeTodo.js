// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = document.querySelector(".js-toDoInput"),
  PendingList = document.querySelector(".js-PendingList"),
  FinishedList = document.querySelector(".js-FinishedList");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";
let pendings = [];
let finisheds = [];

function handleSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value);
  const currentvalue = toDoInput.value;
  paintPending(currentvalue);
  toDoInput.value = "";
}

function handleDelete(event) {
  const btn = event.target;
  const li = btn.parentNode;
  PendingList.removeChild(li);

  const cleanPendings = pendings.filter(function(pend) {
    return pend.id !== parseInt(li.id);
  });
  pendings = cleanPendings;
  savePendings();
}
function handleDelete2(event) {
  const btn = event.target;
  const li = btn.parentNode;

  //PendingList.removeChild(li);
  FinishedList.removeChild(li);

  /*
    const cleanPendings = pendings.filter(function(pend){
        return pend.id !== parseInt(li.id);
    });*/
  const cleanfinisheds = finisheds.filter(function(fin) {
    return fin.id !== parseInt(li.id);
  });

  //pendings = cleanPendings;
  finisheds = cleanfinisheds;

  //savePendings();
  saveFinished();
}

function handleswitch(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.querySelector("span");

  handleDelete2(event);
  paintPending(text.innerText);
  saveFinished();
}

function handleFinish(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.querySelector("span");

  handleDelete(event);
  paintFinised(text.innerText);
  saveFinished();
}
function savePendings() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendings));
}
function saveFinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finisheds));
}
function paintFinised(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("delbutton");
  const switchBtn = document.createElement("switchBtn");
  const span = document.createElement("span");
  const newId = finisheds.length + 1;
  console.log(newId);
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleDelete2);
  switchBtn.innerText = "⏪";
  switchBtn.addEventListener("click", handleswitch);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(switchBtn);
  li.id = newId;
  FinishedList.appendChild(li);
  const finishedObj = {
    id: newId,
    text: text
  };
  finisheds.push(finishedObj);
  saveFinished();
}

function paintPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("delbutton");
  const finishBtn = document.createElement("finishbutton");
  const span = document.createElement("span");
  const newId = pendings.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleDelete);
  finishBtn.innerText = "✅";
  finishBtn.addEventListener("click", handleFinish);
  console.log(text);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finishBtn);

  li.id = newId;

  PendingList.appendChild(li); //ul toDoList에 붙힌다
  const pendingObj = {
    id: newId,
    text: text
  };
  pendings.push(pendingObj);
  savePendings();
}

function loadToDos() {
  const loadedPendings = localStorage.getItem(PENDING_LS);
  const loadedFinished = localStorage.getItem(FINISHED_LS);

  if (loadedPendings !== null) {
    const parsedPendings = JSON.parse(loadedPendings);
    parsedPendings.forEach(function(Pending) {
      paintPending(Pending.text);
    });
  }
  if (loadedFinished !== null) {
    const parsedFinisheds = JSON.parse(loadedFinished);
    parsedFinisheds.forEach(function(finished) {
      paintFinised(finished.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
