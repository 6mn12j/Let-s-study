// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const selectElement = document.querySelector(".country");



const COUNTRY_LS = "country";


function paintCountry(text){
    const s = document.querySelector("select");
    console.log(s);
    s.value =text;
    console.log(s);
}























function askForCountry(){
selectElement.addEventListener('change',(event) =>{
    const result = event.target.value;
    localStorage.setItem(COUNTRY_LS,result);
});

}


function loadCountry(){
    const currentCountry = localStorage.getItem(COUNTRY_LS);
    if(currentCountry === null){
        console.log("null");
        askForCountry();
     
        //user is not
    }else{
        paintCountry(currentCountry);
     
    }
}


function init(){
    loadCountry();
}

init();