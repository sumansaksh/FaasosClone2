import { product_type, customize } from "./export.js";


/*Modal Functioning Of Search*/
document.getElementById("search").addEventListener("click",search);
document.getElementById("searchData-appear").oninput = function(){
  debounce(getData,1000);
}
function search(){
  document.getElementById("searchModalContainer").style.display = "block";
  document.getElementById("searchModal").style.display = "block";
}
let close = document.getElementById("close");
close.addEventListener("click",() => {
  document.getElementById("searchModal").style.display = "none";
  document.getElementById("searchModalContainer").style.display = "none";
});
/*Modal Functioning Of Search End*/
/*Data Searching Code*/
async function getData() {
var searchValue=document.getElementById("searchData-appear").value
let res=await fetch(`https://618abbc034b4f400177c4860.mockapi.io/api/name?search=${searchValue}`)
let data=await res.json()
// data.forEach((searchitem)=>{
//if(searchitem.name==searchValue){
 // showData(data,searchitem.name)
/// }
// })
console.log(data)
showData(data)
} 
//getData();
function showData(data){
let midContainer=document.getElementById('searchContent')
midContainer.innerHTML=null
data.forEach((prod)=>{
   // console.log(prod)
 //  if(sitem==prod.name){
  let div=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let div4=document.createElement("div")
        let div5=document.createElement("div")
        let div6=document.createElement("div")
       // if(prod.category=="Fab Wraps starting at 99 each"){
        let img=document.createElement("img")
         img.src=prod.img
         img.style.width="50%"
         img.style.height="100%"

         let prod_name=document.createElement("p")
         prod_name.innerText=prod.name
         prod_name.style.fontSize="18px"
         prod_name.style.fontWeight="700"
         prod_name.style.color="black"
         prod_name.style.width="75%"
         let prod_price=document.createElement("p")
          let btn_img = document.createElement("img");
        btn_img.src=  product_type(prod, btn_img);
         
         btn_img.style.width="12px"
         btn_img.style.height="12px"
         //btn_img.style.margin="25% 0 0 3%"
        // btn_img.style.border="1px solid red"
         prod_price.innerText="₹" +prod.price
         div5.append(btn_img,prod_price)
         div5.style.display="flex"
         div5.style.justifyContent="space-between"
         div5.style.width="22%"
         div5.style.alignItems="center"
         div5.style.marginTop="-15px"
         div.append(prod_name,div5)
         let prod_desc=document.createElement("p")
         prod_desc.innerText=prod.description
         prod_desc.style.height="16px"
         prod_desc.style.overflow="hidden"
         let readmore=document.createElement('p')
         readmore.innerText="Read More"

         readmore.onclick=()=>{
            window.location.href="single_product.html"
        }



         let prod_rating_div=document.createElement("div")
          let prod_rating = document.createElement("p")
          prod_rating_div.setAttribute("class", "prod-rating");
         prod_rating="★"+" "+prod.rating
         prod_rating_div.append(prod_rating)
         prod_rating_div.style.backgroundColor="#4caf50"
         prod_rating_div.style.color="white"
         prod_rating_div.style.width="20%"
         prod_rating_div.style.height="22px"
         prod_rating_div.style.padding="6px"
         prod_rating_div.style.borderRadius="2px"
         let addToCart=document.createElement("button")
         addToCart.innerText="ADD"
         addToCart.style.backgroundColor="#FFCA28"
         addToCart.style.width="85%"
         let custom_text=document.createElement("p")
         custom_text.innerText="customisable"
         custom_text.style.fontSize="10px"
         custom_text.style.lineHeight="0"

        //  //for customisable

        //  custom_text.onclick=()=>{

        //  }

         div6.append(addToCart,custom_text)
         div6.style.textAlign="center"
         div6.style.width="50%"
        // addToCart.style.width="40%"
          addToCart.className = "addtoCartBtn"
          
          

      

    
        
        //   addToCart.onclick=function() {
        //           console.log("Yes")
        //       let presentitems=JSON.parse(localStorage.getItem("FaasosCart"));
        //       let bagcount=0;
        //    console.log(presentitems);
        //        presentitems.forEach(function (items) {
                
        //         if(items.name==prod.name) {
        //           bagcount++;
        //           //let qty=document.getElementById(qty)
        //          //qty.innerText="bagcount"
        //         }
        //        }); 
        //        if(bagcount==1) {
        //       // alert("Already in Cart");
        //        } else {
        //           addtobag(prod);
                  
        //     }   	
        //        }
        
          
          addToCart.addEventListener("click", addtocart);
          function addtocart(event) {
              let ans = document.getElementsByClassName("addtoCartBtn");
              console.log(ans);

      //add active class to the customize
      document.querySelector(".custom-parent").classList.add("active-custom");
      show_customize(prod);
      console.log("1",event.target)


      let div = event.target.parentNode;
      div.innerHTML = `<div class="inc-des-quantity">
      <div class="minus">-</div>
      <div class="qty">1</div>
      <div class="plus">+</div>
      </div>`;
      //for minus 
      document.querySelector(".minus").addEventListener('click', (event) => {
        //   console.log(event.target.parentNode);
            let qty = event.target.parentNode.querySelector(".qty");
              let curent = Number(qty.innerText);
          if ((curent - 1)== 0){
              let div = event.target.parentNode.parentNode;
            
              div.innerHTML = `<button class="addtoCartBtn" style="background-color: rgb(255, 202, 40); width: 100%;">ADD</button><p style="font-size: 10px; line-height: 0;">customisable</p>`;
              
      }else {
          qty.innerText = --curent;
              }
      });
    
      //for plus 
      document.querySelector(".plus").addEventListener('click', (event) => {
              //adding custimable to +button
      document.querySelector(".custom-parent").classList.add("active-custom");
          
              let qty = event.target.parentNode.querySelector(".qty");
              let curent = Number(qty.innerText);
              qty.innerText = curent+1;
              
      });

      //hello the
  document.querySelector(".custom-bottom").addEventListener("click", () => {
      document.querySelector(".custom-parent").classList.remove("active-custom");
    //   console.log("1",prod);
      let kart = JSON.parse(localStorage.getItem("FaasosCart"));
      kart.push(prod);
      localStorage.setItem("FaasosCart", JSON.stringify(kart));

      cartData();
});

  };
  

  
       if(localStorage.getItem("FaasosCart")===null) {
 localStorage.setItem("FaasosCart",JSON.stringify([]))
}
function addtobag(p) {
let products_cart=JSON.parse(localStorage.getItem("FaasosCart"));
products_cart.push(p);

localStorage.setItem("FaasosCart",JSON.stringify(products_cart));
 }





 div2.append(prod_rating_div,div6)
 div.style.display="flex"
 div.style.justifyContent="space-between"
 //div.style.alignItems="center"
 div2.style.display="flex"
 div2.style.height="40px"
 div2.style.justifyContent="space-between"
 div3.style.padding="2%"

 div3.append(div,prod_desc ,readmore,div2)
  div4.append(img, div3)
  div4.style.backgroundColor="white"
  div4.style.display="flex"
  div4.style.height="220px"
  div4.setAttribute("class", "prod_card")


//   OPENING A NEW PAGE FOR INDIVIDUAL PRODUCT
  div.onclick = ()=>{
      
      localStorage.setItem("single-prod", JSON.stringify(prod));
      window.location.href = "single_product.html";
      console.log(JSON.parse(localStorage.getItem("single-prod")));
      
  }
 div4.style.cursor="pointer"
 midContainer.append(div4)
 //midContainer.style.position="sticky"
// midContainer.style.top="100px"
 div4.style.backgroundColor="white"
//  }
  

  
  
  
})
}



//cart data();
function cartData() {
let qty = document.getElementById("qty");

let cart = document.getElementById("cart-item");
cart.innerHTML = null;

let kart = JSON.parse(localStorage.getItem("FaasosCart"));
var count=0;
console.log(kart)
if (kart === null) {
return 
}

kart.forEach((item) => {
count++
qty.innerHTML = count;
console.log(item.name)
let div = document.createElement("div")
let div2 = document.createElement("div")
let product_name = document.createElement("p")
product_name.innerText = item.name
product_name.style.width = "90%"
let product_price = document.createElement("p")
product_price.innerText = "₹" + item.price
//product_price.style.marginLeft="7px"
// let buttonLeft = document.createElement("button");

let buttonLeft=document.createElement("img")
buttonLeft.src="https://github.com/pankaj5417/koovs.com/blob/main/icons/leftbtn.png?raw=true"

let buttonRight=document.createElement("img")
buttonRight.src="https://github.com/pankaj5417/koovs.com/blob/main/icons/right btn.png?raw=true"



buttonLeft.style.width="43px"
buttonLeft.style.marginRight="3px"
let itemNo=document.createElement("p")
itemNo.innerText="1"
// buttonRight.innerText="+"
buttonLeft.style.backgroundColor="white"
buttonRight.style.backgroundColor="white"
buttonRight.style.width="40px"
buttonRight.style.height="40px"
buttonLeft.style.height="40px"

buttonRight.style.marginLeft="7px"



 buttonLeft.addEventListener('click', (event) => {
       
     let kart = JSON.parse(localStorage.getItem("FaasosCart"));
     let index = kart.indexOf(item);
     console.log(index)
     kart.splice(index, 1);

     localStorage.setItem("FaasosCart", JSON.stringify(kart));


      var total = kart.reduce(function (ac, el) {

    return ac + Number(el.price)
}, 0)
var total_pr = document.getElementById("total")
  
total_pr.innerHTML = '₹' + "" + total
     
     cartData();
      });


      //adding addcustomisabe to right button 
  buttonRight.addEventListener('click', (event) => {
              //adding custimable to +button
      document.querySelector(".custom-parent").classList.add("active-custom");
      show_customize(item);

          
        
  });


  //apply custom 




let btn_img = document.createElement("img")

if (item.type === 'veg') {
    
    btn_img.src = "https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
} else {
    btn_img.src = "https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png"
}
btn_img.style.width = "12px"
btn_img.style.height = "12px"

div2.append(buttonLeft, itemNo, buttonRight)
div2.style.display = "flex"
div2.style.alignItems="center"
div2.style.width = "22%"
div2.style.marginLeft = "2%"
let div3 = document.createElement("div")
div3.append(btn_img, product_name)
div3.style.display = "flex"
div3.style.alignItems = "center"
div3.style.width = "65%"
div3.style.justifyContent = "space-between"



let cartItem = document.getElementById("cart-item");

div.append(div3, div2, product_price)
product_price.style.width = "10%"
product_price.style.marginLeft = "8%"

div.style.display = "flex"
div.style.alignItems="center"
div.style.width = "100%"
cartItem.append(div)

var total = kart.reduce(function (ac, el) {

    return ac + Number(el.price)
}, 0)
var total_pr = document.getElementById("total")
  
total_pr.innerHTML = '₹' + "" + total
total_pr.style.marginLeft
  
});
}
cartData();

let checkouts=document.getElementById("checkout")
checkouts.onclick = () => {
window.location.href = "cart2.html";
}
//function gotoCart(){
//}

// close custom 
document.getElementById("custom-close").addEventListener("click",()=> {
document.querySelector(".custom-parent").classList.remove("active-custom");

});
//






//function for customizable option 
function show_customize(prod) {
let parent = document.querySelector(".custom-middle");
let type_src = product_type(prod);
parent.innerHTML = `<div class="head">
<div><img src = ${type_src} /></div>
<div><h3>${prod.name}</h3></div>
</div>
<div><p> MAKE YOUR FAVOURITE MEAL </p></div>
<div class="custom-option">
<div class = "option">
<div class = "option-head">
<div><img src ="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png" />Potato Wedges (Medium) Thums Up (250ml) </div>
<div>	&#8377 87<input type="checkbox" id="vehicle2" name="" value="87"></div>
</div>
</div>

<div class = "option-head">
<div><img src ="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png" />Coke 330 ml.</div>
<div>	&#8377 57<input type="checkbox" id="" name="" value="55"></div>
</div>
</div>
</div>`
;

}

var timerid;
  function debounce(func,delay) {
    if(timerid){
        clearTimeout(timerid)
    }
    timerid=setTimeout(function () {
    func()
        
    },delay)
}

