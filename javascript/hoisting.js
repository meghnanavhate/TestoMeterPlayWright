//Hoisting in js
//var, let, const and functions automatically move to top
//implicit global variable - not hosted
//let and const - hoisting - Temporal Dead zone(TDZ)

console.log(a)
let a=30;
{
    let a=40
}
{
    let a=50
}

//console.log(a);