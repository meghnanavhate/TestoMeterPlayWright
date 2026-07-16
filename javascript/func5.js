
//setTimeout - I will execute this function after specified delay

import { link } from "node:fs";



/*function printMyName()
{
    console.log("Meghna Navhate");
}
function printMyName1()
{
    console.log("Harshali Navhate");
}
setTimeout (printMyName,5000);
setTimeout (printMyName1,1000);  */

//parameter, funtionname, delay in ms(time in miliseconds (1000ms=1second))


/*function click(element){
    setTimeout(()=>{
        console.log(element,"Clicked");
    },5000);
}
function fill(element,text){
    setTimeout(()=>{
        console.log(element,"filled with",text);
    },1000);
}
click("login link");
fill("username","user1")
fill("password","pass1")
click("login button")

//click on login link
//enter username
//enter password
//click on login button */


//javascript is a single threaded language
//javascript trigger the function sequencially, but dont wait to finish it

//& js is a web design language


//using promise
function click(element){
    let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(element,"Clicked");
        resolve();
    },5000);
})
return p1;
}

function fill(element,text){
    let p2 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(element,"filled with",text);
        resolve();
    },1000);
})
return p2;
}

/*click("login link").then(()=>{
    return fill("username","user1")
}).then(()=>{
    return fill("password","pass1")
}).then(()=>{
    click("login buttion")
}).catch(()=>{
    console.log("Issue found");
}) */



//what is await - I am waiting for function to return me a promise status
//await always use with function which is return promise
//await always be inside async fuction

async function loginFlow() {
try{
    await click("login link");
    await fill("username","user1");
    await fill("password","pass1");
    await click("login button");
}catch(err)
{
    console.log("Error",err)
}finally{
    console.log("I am finally")
}
}
loginFlow();
