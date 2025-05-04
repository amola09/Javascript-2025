//Variables
let a = 2
const b = 3
var c = 4

console.log(a,b,c)

// function

// function without parameter without return type
// function needs to call after closed bracket ('}')
function Calculator(){
    console.log(9+9)
}
Calculator()
// function with parameter without return type

function Calculator1(a1,a2){
    console.log(a1+a2)
}
Calculator1(2,2)

// function with parameter without return type

function Calculator3(b1,b2){
    console.log(b1+b2) 
}
Calculator1(4,2)

/* example 100 rs given - we can use it to buy something
           100 rs shown  we can not do anything with it
           
          
function is keyword 
calculator is funtion name
() - paraethesis
x,y are parameters
{} - blocks and inside blocks we write statements
// addC (10,20) we are calling function with arguments(10,20)

*/

//Function types : 
//1.Function Declaration

function cal2(c1,c2){
    return c1 + c2
}
let result = cal2(3,4)
console.log(result)

//2.Function Expression
let calP = function Calculator4(x1,x2){
    return x1+x2
}
let c3 = calP(2,6)
console.log(c3)
//3.Arrow Function
// Syntax:
/* 
    const functionName = (param1, param2, ...) => {
    function body
    return value;
    };
*/