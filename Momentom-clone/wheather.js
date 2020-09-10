const weather = document.querySelector(".js-wheather");

const API_KEY ="dca781ef6fedf311b9d73fb9e3efa2f5";
const COORDS = "coords";

//JS 이용해서 특정 url 호출 
function getWeather(lat, lng){
fetch (`https:\\api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric` 
).then(function(response){
    return response.json();
})
.then(function(json){
   const temperature = json.main.temp;
   const place = json.name;
   weather.innerText = `${temperature} @ ${place}`
})
}

function saveCoords(coordsObj) {  
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
//좌표 요청 성공시
function handleGeoSucces(position) {
    const latitude = position.coords.latitude; 
    const longitude = position.coords.longitude;  
    const coordsObj = {  
        latitude , // latitude : latitude  위도 
        longitude  //longitude : longitude 경도   
    };
    saveCoords(coordsObj); //좌표 저장 
    getWeather(latitude,longitude);  
}
//좌표요청실패
function handleGeoError() {
    console.log('Cant access geo location'); 
}

//좌표 요청 함수 (navigatosr 함수 사용 )
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords() {  //좌표를 읽어옴 
    const loadedCoords = localStorage.getItem(COORDS);  
    if (loadedCoords === null) {
        askForCoords();  //저장된 좌표가 없으면 좌표를 호출
    } else {
       const parsedCoords = JSON.parse(loadedCoords);
      getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }

}

function init() {
    loadCoords();
}
init();
