const orderForm= document.getElementById("orderForm");
const orders= document.getElementById("order");
orderForm.addEventListener('submit',handleSubmit);//////////////////////FIRST THING
const session1=document.getElementById("session");
drinks=[];

function handleSubmit(event)///////////////////////SECOND THING
{    event.preventDefault();
    console.log(event.target);

    let cusName=event.target.cusName.value;
    let cupSize=event.target.size.value;
    let isHot=event.target.isHot.checked;
    console.log(isHot,"isHot");
    let dType=event.target.drinkType.value;
    let milk=event.target.milk.value;

    new Coffee(cusName,cupSize,milk,isHot,dType);
    console.log(drinks,"handelSubmit");
    renderOrders()
}
function Coffee(cusName, cupSize, milk, isHot, drinkType)//THIRD THING
{   this.cusName=cusName;
    this.cupSize=cupSize;
    this.isHot=isHot;
    this.drinkType=drinkType;
    this.milk=milk;
    // this.min=min;,min=1,max=33
    // this.max=max;
    this.price=price(1,44);

    drinks.push(this);
    toLocalStorage();
    sessionStore();
   
}
// Coffee.prototype.coffe_price=function () {
//     return  Math.floor(Math.random() * (max - min) + min);
// }
// ==========================================================================
// const drinks = []
// function Coffee(cusName, cupSize, milk, isHot, drinkType){
//     this.cusNume = cusName;
//     this.cupSize = cupSize;
//     this.milk = milk;
//     this.isHot = isHot;
//     this.drinkType = drinkType;
//     this.price = this.calcPrice(2, 44);
//     drinks.push(this);
//     toLocalStorage();
// }

// Coffee.prototype.calcPrice=function (min,max) {
//     return Math.random() * (max - min) + min;
// }

// // new Coffee('Joe', 'small', true, true, 'something');
// // console.log(drinks)

// ==========================================================================
function price(min,max){
return Math.floor(Math.random() * (max - min) + min);

 }
console.log(drinks,"line 15");


// ===============================================Session
function renderSessionOrders(){   
    session1.textContent='';//clear the order from the previouse submition
    for (let i = 0; i < drinks.length; i++) {
       let lisItem=document.createElement('li');
       let pargInfo=document.createElement('p');
       let temp;
        if (drinks[i].isHot) {
           temp="hot";
      }else{
        temp="cold";
      }
    //   console.log(drinks[i].price);
      
        pargInfo.textContent=`${drinks[i].cusName} he order the following ${drinks[i].cupSize} of ${drinks[i].drinkType} prefare it ${temp} ${drinks[i].isHot} with ${drinks[i].milk} and the total price for the order is ${drinks[i].price}`;
       console.log(drinks[i].price);
        lisItem.appendChild(pargInfo);

        session.appendChild(lisItem)

    }

}
// ===============================================Session

function sessionStore(){
    let session=JSON.stringify(drinks);
    sessionStorage.setItem('test',session);
}

function readFromSessionStore(){
    let stringObj=sessionStorage.getItem("test");
     let converString=JSON.parse(stringObj);
     if(converString !== null)/////here check if converString not null then asign to big array else dont asign it
     {
        drinks=converString; 
     }
     
     renderSessionOrders();
}
readFromSessionStore();
console.log(drinks);
