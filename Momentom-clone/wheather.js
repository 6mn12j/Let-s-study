const weather = document.querySelector(".js-wheather");

const API_KEY ="dca781ef6fedf311b9d73fb9e3efa2f5";
const COORDS = "coords";

//JS 이용해서 특정 url 호출 
function getWeather(lat, lng){
fetch (`https:\\api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric` 
//데이터 가져올때는 fetch 사용 fetch()안에는 가져올 데이터 앞에 https:// 를 넣어주고 따옴표가아닌 backtick(`)사용
).then(function(response){
    return response.json();
})
.then(function(json){   //then 데이터가 완전히 들어온 다음 함수호출 
   const temperature = json.main.temp;
   const place = json.name;
   weather.innerText = `${temperature} @ ${place}`
})
}

function saveCoords(coordsObj) {  
    localStorage.setItem(COORDS,JSON.stringify(coordsObj)); //좌표 저장값은 string 이여야 하니까 string으로 변환해서 저장
}
//좌표 요청 성공시
function handleGeoSucces(position) {
    const latitude = position.coords.latitude; //위치 좌표의 위도 
    const longitude = position.coords.longitude;  //위치 좌표의 경도
    const coordsObj = {  //좌표 객체 
        latitude , // latitude : latitude  위도 
        longitude  //longitude : longitude 경도   객체의 변수와 key 값이 똑같으면 생략 가능
    };
    saveCoords(coordsObj); //좌표 저장 
    getWeather(latitude,longitude);  
}
//좌표요청실패
function handleGeoError() {
    console.log('Cant access geo location'); //위치 정보를 읽을 수 없습니다
}

//좌표 요청 함수 (navigatosr 함수 사용 )
function askForCoords() {
    //geolocation 은 Object 
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); //(성공시실행함수,실패시실행함수)
}
function loadCoords() {  //좌표를 읽어옴 
    const loadedCoords = localStorage.getItem(COORDS);  //저장된 좌표를 가져옴 
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
