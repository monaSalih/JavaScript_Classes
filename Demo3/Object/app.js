'use strict';



function operation(x,y){
    return (x+y);


}


// console.log(operation(4,6));


let cars = ['kia', 5000, ['Saleem', 'khalid', 'Suzan'], 'usa', 2006, 2002, true];

// console.log(cars[0]);
// console.log(cars[4]);


//object
let saleem={
    userName:"Saleem Saeed",
    age:25,
    gender:"male",
    loveCodeing:true,
    favoratFood:["Mansaf","Shawermah","Maqlobeh"],
    job:"Full stack developer",
    sayName:function(){
        console.log(`Hi my name ${this.userName}`);
    }//Method

}
saleem.sayName()

console.log(saleem.age);
console.log(saleem.favoratFood);

let waleed={
    userName:"Waleed Mohammad",
    age:33,
    gender:"male",
    loveCodeing:true,
    favoratFood:["Mansaf","Shawermah"],
    job:"Androd Developer",
    sayName:function(){
        console.log(`Hi my name ${this.userName}`);
    }//Method

}
waleed.sayName();

let suzan={
    userName:"Suzan Mohammad",
    age:22,
    gender:"Female",
    loveCodeing:true,
    favoratFood:["Mansaf","Shawermah","salad"],
    address:"",
    sayName:function(){
        console.log(`Hi my name ${this.userName}`);
    },//Method
    job:{
        jobTitle:"Front end developer",
        salary:500,
        place:"Aqaba",
    }
}

suzan.sayName();

suzan['CarModel']="Tesla";
suzan.age=44;
console.log(suzan);
console.log(suzan.job.jobTitle);


suzan.userAddress=function(){
    let interAddress=prompt("please enter where you live now");
    this.address=interAddress;

}

suzan.userAddress();