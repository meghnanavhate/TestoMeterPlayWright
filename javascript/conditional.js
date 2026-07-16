//Conditional Statement - if and else conditions

//If...else Statement
/*let age =13;
let ageGroup = "";

if(age <=18){
    ageGroup="child";
}else{
    ageGroup="Adult";
}

console.log(age,"-",ageGroup);*/

//If...else if...else Statement
//018 =child
//19-30 = Adult
//31-45 = Mature
// >45 = Old

/*let age = 60;
let ageGroup = "";

if(age <=18){
    ageGroup ="Child";
}else if(age > 18 && age<=30){
    ageGroup="Adult";
}else if(age >30 && age <= 45){
    ageGroup ="Mature";
}else{
    ageGroup="Old";
}
console.log(age,"-",ageGroup);*/


//How to take input from console
//library - prompt-sync
//npm install prompt-sync

/*const prompt=require("prompt-sync")();

let age = parseInt(prompt("Enter your age"));
let ageGroup = "";

if(age <=18){
    ageGroup ="Child";
}else if(age > 18 && age<=30){
    ageGroup="Adult";
}else if(age >30 && age <= 45){
    ageGroup ="Mature";
}else{
    ageGroup="Old";
}
console.log(age,"-",ageGroup);*/




/*const prompt=require("prompt-sync")();

let age = parseInt(prompt("Enter your age"));
let ageGroup = "";

if(!Number.isNaN(age)){

if(age <=18){
    ageGroup ="Child";
}else if(age > 18 && age<=30){
    ageGroup="Adult";
}else if(age >30 && age <= 45){
    ageGroup ="Mature";
}else{
    ageGroup="Old";
}
console.log(age,"-",ageGroup);
}else{
    console.log("input is not correct");
}*/