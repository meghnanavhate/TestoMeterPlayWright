//function - reusability
//services - take input -> perform actions -> output

//Calculator
//+ button
//input =2, take input
//logic(use) -> curly brace
//output = 1, return

//Q. Perform subtraction and multiplication

export function add(a,b){
    let c=a + b;
    return c;
}
export function Subtract(a,b){
    let c=a - b;
    return c;
}
export function Multiply(a,b){
    let c=a * b;
    return c;
}
export function square(a){
    let c=Multiply(a,a);
    return c;
}
export function valueOfPI(){
    return 3.14;
}

//1 function 1 responsibility

//pi * r* r  (This is the Area of a Circle formula.)
//let radius =12;
//let areaOfCircle = Multiply(valueOfPI(), Multiply(radius,radius));



//let s =add(10,20);
//console.log(s);

