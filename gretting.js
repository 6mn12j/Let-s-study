
const form = document.querySelector(".js-form"),   //html파일의 js-form에 접근하여 form 에 넣음 
input = form.querySelector("input"), //html 파일의 input element 요소에 접슨하여 input 에넣음  
greeting = document.querySelector(".js-greetings");   //greeting 파일의 greeting element 요소에 접슨하여 greeting 에넣음  

const USER_LS = "currentUser",
SHOWING_CN ="showing";

 
function saveName(text){  //saveName 함수 정의
    localStorage.setItem(USER_LS,text);   //받은 값을 로컬 스토리지에 저장한다.
}

function paintGreeting(text){  //paintGreeting 함수 정의 
    form.classList.remove(SHOWING_CN);   //form 에있는 값을 지우고  
    greeting.classList.add(SHOWING_CN);   //greeting 에 더함 
    greeting.innerText = `Hello ${text}`;   //html 에 Hello 이름을 띄운다 
}

function handleSubmit(event){  //handleSubmit 함수 정의 
 event.preventDefault();  //기본적으로 일어나는 함수를 막음 submit 시 default 값인 새로고침에 일어나는걸 막는다 
 const currentValue = input.value;   //지금 값에 폼에서 받아온 겂을 넣음
 paintGreeting(currentValue);    //지금 값을 paintGreeting 함수에 보냄 
 saveName(currentValue);    //saveName 함수에 지금값을 보냄 
}

function askUserName(){   //askUserName 함수 정의 사용자를 물어보는 함수 
   form.classList.add(SHOWING_CN);    //보여줌 
   form.addEventListener("submit",handleSubmit);   //submit 을 보여주고 Submit 되면 handleSubmit 함수 호출 
}

function loadName(){   //loadName 함수 정의
    const currentUser = localStorage.getItem(USER_LS);   //지금 사용자를 로컬스토리지에서 받아옴 
    if(currentUser === null){   //만약 지금 사용자가 로컬 스토리지에 저장되어 있지 않다면 
        askUserName();    //askUserName 함수 호출(사용자를 물어서 받아오는  함수 )
    }else{   //아니면 
        paintGreeting(currentUser);    //지금 사용자를 paint 함
    }
}

function init(){  //innit 함수 정의
    loadName();   //loadName 함수 호출

}

init(); //init 함수 호출 