//Operators in js

//operator - are those entity who decide what operation will take place
//10,4 - operand

//(1)Arithmetic Operators
//+ - * / %

/*let a=10;
let b=3;

console.log(a+b);  //13
console.log(a-b);  //7
console.log(a*b);  //30
console.log((a/b).toFixed(2));  //3.333
console.log(a%b);  //1

console.log(10 + 40 /10 * 2 - 5); //13
//BODMAS(Bracket -- Power -- divide -- Multiply -- Add -- Subtract)
//operator precedence */



//(2)Relational Operation(Comparison Operators) ---used to compare values
//> <  >= <= == !=
//Return boolean (true or false)

/* let r1 =10;
let r2 =10;
console.log(r1 > r2); //false
console.log(r1 < r2); //false
console.log(r1 >= r2); //true
console.log(r1 <= r2); //true
console.log(r1 == r2); //true
console.log(r1 != r2); //false


console.log(10 > "5");

//== check only value
console.log(10 =="10");

//=== check both value and type
console.log(10 === "10");   */



//(3)Logical Operator -- Used with boolean values
// $ and |
//& -- when both condition are true then only true
// | -- when any condition  os true then true

//--true && true = true
 //true && false =false
//false && true =false
//false && false =false

//--true || true = true
 //true || false =true
//false || true =true
//false || false =false

console.log("Meghna" && "Navhate");
console.log("Meghna" || "Navhate");

// && --number  or string = what ever executed in the last
//&& =true /false = true and false

/*let k1=10;
let k2=20;
let k3=30;
console.log(k1 > k2 && k2 >k3); */

/*let k1=40;
let k2=30;
let k3=20;
console.log(k1 > k2 && k2 >k3); */

/*let k1=40;
let k2=30;
let k3=40;
console.log(k1 > k2 || k2 >k3);*/