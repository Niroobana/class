// es5
let a=10;
let b=a; //deep copy:copy the value 
 b=20;
console.log(a);
console.log(b);

let arr1=[1,2,3,4,5];
let arr2=[...arr1]; //shallow Copy
arr2[0]=30;
console.log(arr1);
console.log(arr2);
// spread operator 
// arr1===arr2->false

let obj={
    name:"fdf",
    age:25
};
let obj1={...obj}
obj1.name="fdfd";

console.log(obj);
console.log(obj1);

// function

// function add(a,b){
//     return a+b
// }
// const arr4=[1,2];
// console.log(add(arr4,2));

// function add(a,b){
//     return a+b
// }
// const arr4=[1,2];
// console.log(add(...arr4));

function add(a,b,...args){ //rest operators
    console.log(args);
    return a+b;
    
}
const arr4=[1,2,3,4,5,6];

console.log(add(...arr4));
