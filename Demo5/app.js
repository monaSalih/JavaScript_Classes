'use strict';


async function getData(){
  let responce= await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.b3f5722a92b3b3e53104bffadea8b59c&q=amman&format=json')
  console.log(typeof responce);
  let data=await responce.json()
  console.log(data);

}
getData()

console.log("get data out side the function");