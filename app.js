'use strict';
//Data type
//Number
var x=100;
// console.log(x);
var num;
num=2;
// console.log(num);
//string
var std_name="true";
// console.log(std_name);
//boolen
var a1=true;
var a2=false;

// console.log(a1);
// console.log(a2);

//Null 
var xxx=null;
// console.log(xxx);
//undefiend 
var z="";
// console.log(z);

//error
// var true="uuu";
// console.log(_);
// console.log(_);
//TYPEOF
// var e3= typeof(xxx);
// console.log(typeof(xxx));
// console.log(typeof(a1));
// console.log(typeof(x));
// console.log(typeof(std_name));
// console.log("hello aqaba cohort");
///reserved keyword
////typeof,console,log,var,let,true,false,null,undeifiend


//  std_name2="ghufran";
// console.log(std_name2);
// console.log(typeof(std_name2));
//////////////////////////////////////
///operation
var y=1+2;
// console.log(y);
/////
var w=10-3;
// console.log(w);
// console.log(y+w);
//////////////////
// alert("Hello Aqaba cohort student");
////templet litterls
var text='aqba cohort"orange"';
// console.log(text);
/////second way
var back_tick=`aqba cohort"orange Academy"`;
// console.log(back_tick);
// console.log(`"console.log(variable name);" this line of code to show the data`);
var sub="1+3";
// console.log(sub);
/////////////////
////prompt
// var prompt_msg=prompt("enter your name:");
// console.log("welcome to aqaba cohort: "+prompt_msg);
////////////////////
/////var vs let
//////var

// m3;
// console.log(m3);
// var m3=5;
// console.log(m3);
/////////////
// m4;
// console.log(m4);
// let m4=5;
// console.log(m4);
////////////////////////////////////
//use strict
//before use strict
let cc=33;
console.log(cc);

///////////////////////////////////////
//////////CONDITION
if (5>4){
    console.log(true);
}

////////////////
let x_test=3+4;
if (x_test>12){ 
    console.log("greater than");
}else {
    console.log("less than");
}
//////////////////
// let input_string=prompt("plz enter number");//string

// console.log(typeof input_string);
// console.log(input_string+2);


// let convert_to_number=Number(input_string);
// console.log(convert_to_number+3);

////////////////////////////////////////////////////
let first_arg=prompt("enter first number");
let second_arg=prompt("enter second number");

let number1=Number(first_arg);
let number2=Number(second_arg);

if(number1>number2){
    console.log(number1+"grater than" +number2);
}else{
    console.log(number2+"grater than" +number1);

}
