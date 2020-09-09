//2.Parameters
//premitive parameters: passed by value
//object parameters: passed by reference

function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

//3.Default parameters 
function showMessage (message, from='unknown'){
    console.log(`${message} by ${from}`);

}
showMessage('Hi');

//4.Rest parameters 배열
function printAll(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
    for( const arg of args){
        console.log(arg);
    }
    args.forEach(arg=>console.log(arg));
}

printAll('dream', 'cording' ,'ellie');

//5.Local scope
let globalMessage = 'global'; //global variable;
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function childMessage(){
        console.log(message);
        let childMessage = ' hello';
    }

}
printMessage();

//6.Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum: ${1,2}`);

//7.Early return, early ExtensionScriptApis
//bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }//조건이 아니면 바로 return하고 필요한 logic을 진행 하는게 좋음
    //long upgrade logic... 
}

const print = function(){  //anoymous function
    console.log(['print'])
};
print();
const printAgaint = print;
printAgaint();
const sumAgain = sum;
console.log(sumAgain(1,3));

//2.Callback function using funcion expressin
function randomQuiz (answer, printYes,printNo){ //정답, 정답일때호출할 함수,정답이 아닐때 호출할 함수
    if(answer ==='love you'){
        printYes();
    }else{
        printNo();
    }
}
//anonymous function
const printYes = function(){
    console.log('yes!');
};

//named function
//better debugging in debugger's stack traces
const printNo = function print(){
    console.log('No!');
};

randomQuiz('love you',printYes,printNo);
randomQuiz('worng',printYes,printNo);

//Arrow function
//alwats anonymous
const simplrPrint = function(){
    console.log('simplePrint!');
};
const simplePrint = () => console.log('simplePrint!');

const add = function(a,b){
    return a+b;
}
const add = (a,b) => a+b;

const simpleMultiply = (a, b) =>{
    //do something more
    return a*b;
};