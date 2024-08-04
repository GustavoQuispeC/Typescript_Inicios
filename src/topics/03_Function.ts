function addNumbers(a : number, b:number){
    return a + b;
}
const result: number = addNumbers(1,2)


const AddNumero=(a:number, b: number):string =>{
    return `${a + b}`;
}
const valor = AddNumero(2,3);


function multiply(firstNumer:number, seconNumber?:number, base:number = 2){
    return firstNumer * base;
}
const multiplyResult:number = multiply(5);

console.log({result,valor,multiplyResult});


export{}