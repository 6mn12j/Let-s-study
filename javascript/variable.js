//2.Variable , rw(read/write) 메모리의 값을 읽고 쓰기 가능
//let (added in ES6)


{
    let name ='minju';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(name);

//var (don't ever use this!)
//var hoisting (move declaration from bottom to top)
//has no block scope
console.log(age);
age=4;
var age;

//3.Constants,r(read only)
//use const whenever possible.
//favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes
const dasInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types:primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS

//data types for number
let a =12;
let b =1.2;

//string
const char= 'c';
const brendan = ' brendan';
const greeting = 'hello ' + brendan;
console.log(`value ${greeting}, type: ${typeof greeting}`);

//4.Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol 메모리에 바로 저장
//object, box container 값이 커서 reference를 통해서 접근
