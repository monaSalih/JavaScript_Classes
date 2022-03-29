"use strict";
let ulElemnt= document.getElementById("testLi");

async function getData() {
  let responce = await fetch(
    "https://eu1.locationiq.com/v1/search.php?key=pk.b3f5722a92b3b3e53104bffadea8b59c&q=amman&format=json"
  );
  //   console.log(responce);
  let data = await responce.json();
  //   console.log(data);
  let display=data.map((name1) => {
    let liElement= document.createElement("li");
    ulElemnt.appendChild(liElement);
    let new_name=name1.display_name.split(",",2);
    console.log(new_name);

    liElement.innerHTML=`${new_name} and lat ${name1.lat} and long ${name1.lon} `;
});
    // return `${name1.display_name} and lat ${name1.lat} and long ${name1.lon} `;


 



}
getData();

console.log("get data out side the function");
