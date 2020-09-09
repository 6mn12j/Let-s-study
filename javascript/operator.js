//1.String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals : 1 + 2 ${1+2}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something
//if(nullableObject != null){
 //   nullableObject.something;
//}
//7.Equality
const stringFive = '5';
const numberFive = 5;
//== loose equality, with type conversion
//type 신경 x
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false
// === strict equality, no type conversion
//type 을 신경 씀
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

//object equaluty by reference
const ellie1 = { name : 'ellie'}; 
const ellie2 = { name : 'ellie'};
//1과2에는 서로 다른 reference값이 들어 있음
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false ref1 != ref2
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); // true

//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log(' ' == false); //true
console.log(' ' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

//8.Conditional operators :if
//if , else if ,else

//9.Ternary operator: ?
//condition ? value1 : value2;

//10.Swutch statement
const browser = 'IE';
switch (browser) {
    case ' IE':
        console.log('go aswa!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    defalut:
    console.log('same all!');
    break
}

//break 루프를  완전 끝냄
//conntine 지금 스킵 다음 루프로
for(let i = 0; i <= 10 ;i++){
    if(i%2 == 0)
    console.log(` ${i}`);
}

for(let i = 0 ; i <10 ; i++){
   
    if(i === 8 ) break;
    console.log(i)
}