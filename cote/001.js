//문자열 변환 아스키코드 변환
function init(){
   var result=""
   let data = [
   '   + -- + - + -   ',
   '   + --- + - +   ',
   '   + -- + - + -   ',
   '   + - + - + - +   ',]
for (var s of data) {
    let a = parseInt(s.replace(/ /g,'').replace(/\+/g,'1').replace(/-/g,'0'),2);
    result += String.fromCharCode(a);
   
    

    }
 console.log(result);
}

init()