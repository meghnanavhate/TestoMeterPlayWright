//Datatyype

//Number - 12,13,12.0
//3 ways to represent numbers in js
//(1)Literal way =10,40
//(2)Constructor way- Number(10)
//(3)parsing way


//(1)Literal way =10,40------
/*let a=10.9; //Literal way
console.log(typeof a);*/


//(2)Constructor way-------
/*let a=Number("10");
console.log(a);
console.log(typeof a);*/

/*let a=Number("10px");
console.log(a);
console.log(typeof a);*/


//(3)parsing way------

/*let a=parseInt("10");
console.log(a);
console.log(typeof a);*/

/*let a=parseInt("10px");
console.log(a);
console.log(typeof a);*/


//MAX_SAFE_INTEGER - correct calcuation

/*let a=Number.MAX_SAFE_INTEGER //9007199254740991  this is a safe value
console.log(a);*/


/*let a=9007199254740991 + 2; //9007199254740992
console.log(a);*/

/*let a=9007199254740991 - 2; //9007199254740989
console.log(a);*/

/*let a=Number.MAX_VALUE; //1.7976931348623157e+308 It cannot store a value larger than this
console.log(a);*/

//BigInt (To Create a BigInt,add n at the end of the number)
//There are 2 ways to represent BigInt
//(1)Literal
//(2)constructor

/*let a = 76848239278493984529649274396491741534565284658237696349184671754721683461876478167871678671678461786781678461764678165649756282668464259494649496642n;
console.log(a);
console.log(typeof a);*/


/*let a = 76848239278493984529649274396491741534565284658237696349184671754721683461876478167871678671678461786781678461764678165649756282668464259494649496642n;
a=a+2n;
console.log(a);
console.log(typeof a);*/


/*let a = BigInt(76848239278493984)
a=a+2n;
console.log(a);
console.log(typeof a);*/

//Boolean datatype ---(Boolean has 2 values : ture and false)
//true - non falsy value
//false - 0, false," "(empty string), null, undefined, NaN(not a number)---(these are the falsy values)

/*a=Boolean(Number("10px"))
console.log(a);
console.log(typeof a);*/

/*a=Boolean(Number(10))
console.log(a);
console.log(typeof a);*/
/*
a=Boolean("Meghna")
console.log(a);
console.log(typeof a);  */

a=Boolean(BigInt("0"))
console.log(a);
console.log(typeof a);



