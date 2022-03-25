'use strict';

// let ahmad={
//     userNmae:"Ahmad Waleed",
//     age:33,
//     job:"Frontent developer",
// }
// let suzan={
//     userNmae:"Suzan Ahmad ",
//     age:22,
//     job:"Backend developer",
// }

// let razan={
//     userNmae:"Razan Saleem",
//     age:29,
//     job:"UX developer",
//     sayHi:function(){
//         console.log(`${userNmae} hi`);
//     }
// }

//counstructor
//share for resource between obj
let employeesInf=[];
function Employee(empName, empAge, empJob){
   this.userName=empName;
   this.age=empAge;
   this.job=empJob;
 employeesInf.push(this);
}

let ahmad= new Employee("Ahmad Waleed", 33, "Frontent developer");
console.log(ahmad);

let suzan= new Employee("Suzan Ahmad ",22,"Backend developer")
console.log(suzan);

let razan= new Employee("Razan Saleem ",22,"UX developer")
console.log(razan);

Employee.prototype.sayHi=function(){
    console.log(`${this.userName} welcome in our system`);
}

ahmad.sayHi();
suzan.sayHi();
razan.sayHi();
console.log(employeesInf);