//what is array  - used to store multiple value in a single variable
//Array - collection datatype
////arrays are Index entity
//Index starts with 0

/*let a=[10,20,30,40];
console.log(a[1]); */

//for each loop -use of(for...of is used to iterate through the values of an array one by one)
/*let ar=[10,20,30,40];
for (let k of ar){
console.log(k);
}  */

//how to check index
     /*let a=[10,20,30,40];
//index     0   1  2  3
//max index =outbound index = 3
//size = 4
console.table(a);*/


//-----------------------
//push - add value to the last 
//pop - remove last value
//unshift - add value to the start
//shift - remove data from start

//Used Push  - add value to the last
/*let ar=[10,20,30,40];
ar.push(90);
console.log(ar);*/

//Used unshift - add value to the start
/*let ar=[10,20,30,40];
ar.unshift(90);
console.log(ar);*/

//Used Pop - remove last value
/*let ar=[10,20,30,40];
ar.pop();
console.log(ar);*/

//Used shift - remove data from start
/*let ar=[10,20,30,40];
ar.shift()
console.log(ar);*/

/*let ar=[10,20,30,40];
ar.push(45); //10,20,30,40,45
ar.unshift(34); //34,10,20,30,40,45
ar.pop(); //34,10,20,30,40
ar.unshift(12); //12,34,10,20,30,40
ar.push(78);//12,34,10,20,30,40,78
ar.shift(); //34,10,20,30,40,78
ar.pop();//34,10,20,30,40
console.log(ar);*/

//splice function - Adds, removes, or replaces elements from the middle of the array.
/*let ar=[10,20,30,40];
ar.splice(2,0,90);
//----splice[index,deleteCount,NoOfItems]
console.log(ar);//output - 10,20,90,30,40 */

/*let ar=[10,20,30,40];
ar.splice(2,1,90);
console.log(ar); //output - 10,20,90,40 */

/*let ar=[10,20,30,40];
ar.splice(2,2,90);
console.log(ar); //10,20,90*/

//another way to replace value
/*let ar=[10,20,30,40];
ar[2]=12;
console.log(ar); //10,20,12,40*/

/*let ar=[10,20,30,40];
ar.splice(2,1,12);
ar.splice(2,0,45);
ar.splice(4,0,25,35,45,65,75);
console.log(ar); //output - 10,20,45,12,25,35,45,65,75,40*/


//sort - Sorts the array elements.
/*let ar=[10,20,3,11,101];
//convert all value as string then sort
ar.sort((a,b) => a-b);
console.log(ar);*/

//----Two-Dimensional array - (A two-dimensional array is an array that contains other arrays as its elements.)
//2D Array - when we have array inside array
//use mark

student1Marks = [10,20,30,40];
student2Marks = [40,20,10,50];
totalStudentMarks =[
          student1Marks, student2Marks
]
//console.log(totalStudentMarks[0][2]);
console.log(totalStudentMarks[0][2],totalStudentMarks[1][2]);