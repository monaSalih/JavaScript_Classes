"use strict";
const formOrder = document.getElementById("orderForm");
const ulItem = document.getElementById("order");
const session=document.getElementById("session");
let banana = []; ///1

function storeInLocalStorage(){
    let stringArray=JSON.stringify(banana);
    localStorage.setItem("data",stringArray);
}
///============================================================read from local storage
function readFromLocalStorage(){
    let stringObj=localStorage.getItem("data")
     let converString=JSON.parse(stringObj);
     if(converString !== null)/////here check if converString not null then asign to big array else dont asign it
     {
        banana=converString; 
     }
     
     renderOrder();
}
readFromLocalStorage();


///=============================================================

function Coffee(cusName, cupSize, milkType, isHot, drinkType) {
  this.cusName = cusName;
  this.cupSize = cupSize;
  this.milkType = milkType;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.price = priceCoff(3,15);

  banana.push(this);
  renderOrder();
  storeInLocalStorage();
  console.log(banana);
}
function priceCoff(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

formOrder.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  
  let cusName = event.target.cusName.value;
  
  let cupSize = event.target.cupSize.value;
  
  let milkType = event.target.milkType.value;
  
  let isHot = event.target.isHot.checked;
  
  let drinkType = event.target.drinkType.value;
  //   let price = Math.ceil(Math.random() * (15 - 3) + 3);, price
  new Coffee(cusName, cupSize, milkType, isHot, drinkType);
  renderOrder();
}

// handleSubmit(); //2

function renderOrder() {
    ulItem.textContent='';
    for (let i = 0; i < banana.length; i++) {
      //new list item
      const liElement = document.createElement("li");
      ulItem.appendChild(liElement);
      //new paragraph
      const parElement = document.createElement("p");
      liElement.appendChild(parElement);
      //hot/cold
      const hot = banana[i].isHot ? "hot": "cold"
      //paragraph content
      parElement.innerText = `this customer ${banana[i].cusName} he order the following ${banana[i].cupSize} with ${banana[i].milkType} and he prefare is ${hot} in ${banana[i].drinkType} and the price ${banana[i].price} `;
    }
  }
//   =============================================== SESSION 
  function renderSessionOrders(){   
       ulItem.textContent='';//clear the order from the previouse submition
      for (let i = 0; i < banana.length; i++) {
         let lisItem=document.createElement('li');
         let pargInfo=document.createElement('p');
         let temp;
          if (banana[i].isHot) {
             temp="hot";
        }else{
          temp="cold";
        }
        console.log(banana[i].price);
        
          pargInfo.textContent=`${banana[i].cusName} he order the following ${banana[i].cupSize} of ${banana[i].drinkType} prefare it ${temp} ${banana[i].isHot} with ${banana[i].milk} and the total price for the order is ${banana[i].price}`;
         console.log(banana[i].price);
          lisItem.appendChild(pargInfo);
  
          session.appendChild(lisItem)
  
      }
  
  }
  // ===============================================
  
  function sessionStore(){
      let session=JSON.stringify(banana);
      sessionStorage.setItem('test',session);
  }
  
  function readFromSessionStore(){
      let stringObj=sessionStorage.getItem("test")
       let converString=JSON.parse(stringObj);
       if(converString !== null)/////here check if converString not null then asign to big array else dont asign it
       {
          drinks=converString; 
       }
       
       renderSessionOrders();
  }
  readFromSessionStore();

/////////////////////////////////local storage
// let objTest={
//     userName:"WaterMelon",
//     age:2,
// }
// console.log(typeof objTest);
// let stringObj=JSON.stringify(objTest);
// console.log(typeof stringObj,"convert object to string");
// console.log(stringObj,"convert object to string");


// let backToObj=JSON.parse(stringObj)
// console.log(typeof backToObj,"convert string to object ");
// console.log( backToObj,"convert string to object ");
