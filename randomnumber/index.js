// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.getElementById("guess-form"),
input = document.getElementById("guess-input"),
playbutton =document.getElementById("play"),
sliderInput = document.querySelector(".slider-input");

let MAXVALUE = 0 ;
const MINVALUE = 0;


function handleSubmit(e){
e.preventDefault();

}
function getFomrNumber(){
    return input.value;
}
function getRandomNumber(min,max){
    const rvalue =Math.floor(Math.random() * (max-min) + min);
    console.log(`rvalue: ${rvalue}`);
    return rvalue;
}
function buildStart(you,machine){
    const chose = document.getElementById("chose");
    const result = document.getElementById("result");
    chose.innerText =`You chose:${you},the machine chose: ${machine}`;
    parseInt(you);
    parseInt(machine);
    result.innerText = ( you==machine ? "You won!":"You lost!");
    
}
function paintGame(you,machine){
 buildStart(you,machine);
}
function handleClick(){
    const youvalue = getFomrNumber();
    MAXVALUE = parseInt(getSliderValue());
    const rvalue =  getRandomNumber(MINVALUE,MAXVALUE);
    
    paintGame(youvalue,rvalue);
    

}
function showSliderValue(v){
    const showSliderValue = document.getElementById("slider-valuelview");
    showSliderValue.innerText = v;
}

function getSliderValue(){
    const svalue = sliderInput.value; //slider 값
    
    showSliderValue(svalue);
    return svalue;
}

function init(){
    sliderInput.addEventListener("change",getSliderValue);
    playbutton.addEventListener("click",handleClick);
    

}


init();
