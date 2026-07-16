//promises
//what is promise -> they gave you surity. that i will return you some status
//pending, fulfilled(resolved),rejected



/*const p1 = new Promise((resolve, reject)=>{
    resolve("Hello");
});

//fulfilled- -> then
//reject -> catch

p1.then((msg)=>{
    console.log("Then ->", msg)
}).catch((msg)=>{
    console.log("Catch ->",msg)
});   */


const p1 = new Promise((resolve, reject)=>{
    reject("Hello");
});

//fulfilled- -> then
//reject -> catch

p1.then((msg)=>{
    console.log("Then ->", msg)
}).catch((msg)=>{
    console.log("Catch ->",msg)
});