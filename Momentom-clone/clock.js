
const clockContainer = document.querySelector(".js-clock"), //html파일의  js-clock 인 요소에 접근
 clockTitle = clockContainer.querySelector("h1"); //js-clock 의 자손 엘리먼트 중 h1 을 갖고옴 

 
 function getTime(){ //시간을 가져오는 함수 정의 
    const date = new Date();   // 날짜를 표현할 수 있는 객체 date를 생성.그리고 new 연산자를 사용해서 새로운 객체 만듬 
    const minutes = date.getMinutes(); //분을 표현할 수 있는 객체 minutes 생성. 그리고 minute을 가져와서 넣음 
    const hours = date.getHours();  //시간을 표현할 수 있는 객체 hours 생성. 그리고 hours 를 가져와서 넣음 
    const seconds = date.getSeconds();//초를 표현할 수 있는 객체 secondes 생성. 그리고 second 를 가져와서 넣음 
   
   

    //clockTitle(html의 h1)에 보여질것 .
    clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${   //시간이 만약 10보다 작다면 0을 붙혀서 보여주고 아니면 그냥 시간을 보여줌 예 01 , 11
        minutes<10 ? `0${minutes}`:minutes    //분이 만약 10보다 작다면 0을 붙혀서 보여주고 아니면 그냥 시간을 보여줌 예 01 , 11
    }:${seconds < 10 ? `0${seconds}`:seconds}`;   //초가 만약 10보다 작다면 0을 붙혀서 보여주고 아니면 그냥 시간을 보여줌 예 01 , 11
  
}


 function init(){  //init 함수 정의
    getTime();  //시간을 불러오는 함수 호출 
    setInterval(getTime,1000);   //1s 마다 시간을 가져옴
}

init();  //init 호출 
