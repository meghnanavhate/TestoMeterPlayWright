// Q.Write a JavaScript program to create two functions, double() and triple(),
// that return the double and triple of a given number.

/*function double(value){
    return value*2;
}
function triple(value){
    return value*3;
}

console.log(double(40));  //output - 80
console.log(triple(40)); //output - 120 */

//Q. Write a program to demonstrate Closure and Higher-Order Function
// by creating double() and triple() functions dynamically.

/*function multipliar(multipliarValue){
    let retFun = function Multiply(value){
        return multipliarValue * value;
    }
    return retFun;
}
let double =multipliar(2);
let triple = multipliar(3);

console.log(double(40));  //output - 80
console.log(triple(40)); //output - 120  */

//Closures

function createdLogger(module){
    let logger = function log(msg){
        console.log(`${module}: ${msg}`)
    }
    return logger;
}

let loginLogger = createdLogger("LoginPage");
loginLogger("This is a login page");
loginLogger("entering abc as username");    

let paymentLogger = createdLogger("PaymentPage");
paymentLogger("This is a login page");
paymentLogger("entering abc as username");    