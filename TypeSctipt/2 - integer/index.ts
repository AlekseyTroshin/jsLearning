const myName:string = 'WFM';
const myAge:number = 50;

function getMyName():string {
    return myName;
}

function getMyAge():number {
    return myAge;
}

function newGetMyAge(age:number):number {
    return age;
}

function newGetMyAge2(age:number, prefix: string):string {
    return prefix + age;
}

function newGetMyAge3(age:number, prefix: string = 'Hello'):string {
    return prefix + age;
}

// void - не чего не ожидаем в ответ
function consoleLog(str: string):void {
    console.log(str);
}

const testFunc1 = () => 1 + 1;
const testFunc2 = function() {
    return 1 + 1;
}

let mySum:(a:number, b:number) => number;

function sum(num1:number, num2:number):number {
    return num1 + num2;
}

mySum = sum;

console.log(newGetMyAge(40));
console.log(newGetMyAge2( 32, 'hello'));
console.log(newGetMyAge3( 32));
consoleLog('Test string');
console.log(sum(5, 10));
console.log(mySum(15, 10));