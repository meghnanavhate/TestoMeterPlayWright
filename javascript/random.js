//Random Number - Math.random()is used to generate a random number between 0(inclusive)and 1(exclusive).

//1. Math.floor()rounds a number down to the nearest interger ---ex = Math.floor(7.8)-> 7
//2.Math.ceil()rounds a number up to the nearest integer ---ex = Math.ceil(7.2) -> 8

// Write a JavaScript program to generate and print 10 random numbers between 0 and 99.
//1 to 100
/*for(let i=0; i<10; i++){
    console.log(Math.floor(Math.random() * 100));
} */

// Q.Write a program to generate 10 random numbers in the range of 100 to 499.
//100-500
//range = 500-100=400

  /*  for(let i=0; i<10; i++){
    console.log(100 +Math.floor(Math.random()* 400));
}  */

// Q.Write a program to generate 10 random numbers in the range of 1000 to 4999.
/*let start =1000;
let end=5000;
for(let i=0;i<10;i++){
    console.log(start+Math.floor(Math.random()*(end-start)));
}  */

// Q.Write a JavaScript program to generate a random 4-digit number that does not contain the digit 5.
/*let ar =[0,1,2,3,4,6,7,8,9]
let start =0;
let end =ar.length;
let totalDigit=4;
let randomNumber ="";
for(let i=0;i< totalDigit;i++){
    let index=start +Math.floor(Math.random() * (end-start));
    randomNumber = randomNumber+ar[index];
}
console.log(randomNumber);  */


/*let ar =[0,1,2,3,4,6,7,8,9]
let start =0;
let end =ar.length;
let totalDigit=4;
for(let k=1;k<=10;k++){
    let randomNumber ="";
    for(let i=0;i< totalDigit;i++){
    let index=start +Math.floor(Math.random() * (end-start));
    randomNumber = randomNumber+ar[index];
}
console.log(randomNumber);

}  */

// Q.Write a JavaScript program to generate and print 10 random 4-character alphanumeric strings.
/*let ar ="abcdefghijklmnopqrstuvwxyz0123456789"
let start =0;
let end =ar.length;
let totalDigit=4;
for(let k=1;k<=10;k++){
    let randomNumber ="";
    for(let i=0;i< totalDigit;i++){
    let index=start +Math.floor(Math.random() * (end-start));
    randomNumber = randomNumber+ar[index];
}
console.log(randomNumber);

} */


//Q. Write a JavaScript program to create a reusable random string generator using closures.
function creatRandom(totalCharcter, randomString){

    let random =function generatRandom(){
//let ar ="abcdefghijklmnopqrstuvwxyz0123456789"
let start =0;
let end =randomString.length;
//let totalDigit=4;
//for(let k=1;k<=10;k++){
    let randomNumber ="";
    for(let i=0;i< totalCharcter;i++){
    let index=start +Math.floor(Math.random() * (end-start));
    randomNumber = randomNumber+randomString[index];
}
return randomNumber;

}
return random
}
let lowerCaseRandom10Char = creatRandom(10, 'abcdefghijklmnopqrstuvwxyz');
console.log(lowerCaseRandom10Char());

let random_Number6 = creatRandom(6, '0123456789');
console.log(random_Number6());

let lowerUpperCaseRandom10Char = creatRandom(10, 'abcdefghijklmnopqrstuvwxyz'+'abcdefghijklmnopqrstuvwxyz'.toUpperCase());
console.log(lowerUpperCaseRandom10Char());