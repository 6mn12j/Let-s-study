//import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;


const h2 = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now= new Date();
  
  const value = xmasDay - now ;
  console.log(value);


  const days = Math.floor(value /(1000*60*60*24));
  const hours = Math.floor((value%(1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((value%(1000*60*60))/(1000*60));
  const seconds = Math.floor((value%(1000*60))/(1000)) ;


h2.innerText= `${days<10?`0${days}`:days}d${
    hours<10?`0${hours}`:hours}h${
        minutes<10?`0${minutes}`:minutes}m${
            seconds<10?`0${seconds}`:seconds}s`;
 


}



function init() {
    getTime();
   setInterval(getTime,1000);
}
init();
