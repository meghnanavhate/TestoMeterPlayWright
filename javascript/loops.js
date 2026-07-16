//loops in javascript  = used to execute a block of code repeatedly.

//3 types 
//1)While - when we check condition first and the execute loop
//2)do-while - first execution and then condition check
//           -do whhile always execute atleast once
//3)for

//(1)while loop
/*let a=1;
while(a<=5){
    console.log(a);
    a=a+1;
}*/


//(2)do-while loop
/*let a=10;
do{
    console.log(a);
    a=a+1;
}while(a<=5); */

//Break
/*let a=1;
while(a<=5){
    if(a == 3){
        break;
    }
    console.log(a);
    a=a+1;
} */


//continue - skip that iteration
/* let a=0;
while(a<=5){
    a=a+1;
    if(a==3){
        continue;
    }
    console.log(a);
} */


//(3)for loop
/*for(let k =1; k<=5; k++){
    console.log(k);
} */

/*for(let k=1; k<=5; k++){
    if(k==3){
        continue;
    }
    console.log(k);
}*/

//Q. Print numbers from 1 to 10 using a loop
/*for(let a=1; a<=10; a++){
    console.log(a);
}*/


//Q. print even number from 1 to 20

/*for(let k=1; k<=20; k++){
    if(k%2===0)
    {
        console.log(k);
    }
}*/


//Q. find the sum of numbers from 1 to n
/*let n=5;
let sum =0;

for(let i=1; i<=n; i++){
    sum +i;
}
console.log(sum);*/

//Q. find factorial of a number
let n=5;
let fact =1;
for(let i=1; i<=n; i++){
    fact *=i;
}
console.log(fact);