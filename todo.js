const toDoForm = document.querySelector(".js-toDoForm"), //폼을 만들고
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");  //ul

const TODOS_LS = "toDos";

let toDos =[];


function deleteToDo(event){
//console.dir(event.target.parentNode);

const btn = event.target;
const li = btn.parentNode;
toDoList.removeChild(li); //투두리스트에서 버튼이 눌린 li를 지워 
const cleanToDos = toDos.filter(function(toDo){ //cleanToDos에 toDos 배열을 필터함수를 돌리는데
   return toDo.id !== parseInt(li.id); // li의 id 를 숫자로 변형해서 delBtn에서 받아온 li와 같지 않을때만 클린 투두 함수에 넣어준다  
}); 
toDos = cleanToDos ; // 바뀐 투두를 바꿔준다아악
saveToDos();
}
 
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));  //자바스크립트 오브젝트를 스트링으로 바꿔준다.
}

function paintToDo(text){
    const li = document.createElement("li"); //비어있는 li 만들고
    const delBtn = document.createElement("button"); //그다음에 버튼
    const span = document.createElement("span"); // span을 만들었어
    const newId = toDos.length +1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn); //뭘가를 그의 father element 안에 넣음 , 버튼을 li안에 넣음
    li.appendChild(span); //span을 li안에 넣고 
    li.id = newId; //li에도 Id추가 다음에 버튼을 누르면 없어져야하니까
    toDoList.appendChild(li); //span과 버튼을 li안에 append하고 ,마지막으로 li를 ul 에다 append 하는것 
    //todo가 생성될때마다 toDos 라는 배열에 넣을거임
    const toDoObj={
            text: text,
            id: newId
    };
    toDos.push(toDoObj);  //'toDos'array 안에 toDoObj 를 넣는다
    saveToDos(); //push 한 이후에 호출 toDos 가 비어있으니까 push 후 넣는다!
}

function handleSubmit(event){
    event.preventDefault(); // submit 시 디폴트 값인 새로고침을 막아준다
    const currentValue =toDoInput.value; //폼에 적힌 값을 currentValue에 넣어준다 
    paintToDo(currentValue);  // paintToDo 해준다 
    toDoInput.value =""; //submit 같은 개념 투두를 화면에 보여줬으니까 폼에 "" 를 적어서 비워주는 개념 ? 
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); //로컬 스토리지에서 투두를 가져온다 
   
    if(loadedToDos !== null){  //가져올 투두가 있으면
    //불러오는게 스트링임 스트링을 오브젝트로 변환해서 불러와야합니다.로컬스토리지에는 스트링으로만 저장 됨
    const parsedToDos = JSON.parse(loadedToDos); //자바스크립트 오브젝트로 변환해서 parsedToDos에 담음
    //forEach 함수 array에 담겨 있는 것들에 각각 한번씩 함수를 실행 시켜줌 
    parsedToDos.forEach(function(toDo) { //forEach 함수를 실행함 함수 이름은 toDo
       paintToDo(toDo.text);    //paintToDo 해준다 
      });
    }


}
function init(){
    loadToDos(); //투두를 불러온다 
    toDoForm.addEventListener("submit", handleSubmit);  //투두가submit 되면 handleSubmit 함수를 불러온다 
}

init();

/*로컬 스토리지에는ㄴ 자바스크립 데이터를 저장못함 오직 스트링만 넣ㅇ르 수 있어요

foreach*/

/*투두 리스트 지우기 화면에서 지우고 html 에서도 지워야함
class ja-toDolist의 li 를 지울겁니다 이자식들의 id를 알아야 해욥
target을 이용해서 버튼을 알아내고 그 버튼의 부모를 알아야 합니다
consol.dir 로 알아봄  */