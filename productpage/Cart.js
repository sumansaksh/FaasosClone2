
import { product_type, customize } from "./export.js";

import {nav,sid} from "../Nav_bar/navbar.js";
document.getElementById("navbar").innerHTML = nav;
document.getElementById("mySidebar").innerHTML = sid;

import foot from "../footer/footer.js";
document.getElementById("big5").innerHTML = foot;


//let name = document.getElementById("showName")
  //      console.log(name+"suman")


        // adding customize to the end of the html document
document.body.innerHTML += customize();

var preloader = document.getElementById("loading");
document.body.onload = () => {
  preloader.style.display = "none"; 
}

document.getElementById("cod_pay_button").onclick = () =>{

  window.location.href = "../paymentAfterPage/afterpage.html";
  
}



async function getData(){
    let res=await fetch(`https://demo8715768.mockable.io/faasos`)
    let data=await res.json()
    // console.log(data)
    showData(data)
} 
getData()


var viewCouponsFun=document.getElementById("view-coupons")
viewCouponsFun.onclick=()=>{
  viewCoupons()
}

function showData(data){
    var midContainer=document.getElementById('mid-container')
      data.forEach((prod)=>{
         // console.log(prod)
        var div=document.createElement("div")
        var div2=document.createElement("div")
        var div3=document.createElement("div")
        var div4=document.createElement("div")
       // if(prod.category=="Fab Wraps starting at 99 each"){
        var img=document.createElement("img")
         img.src=prod.img
         img.style.width="100%"
         let prod_name=document.createElement("p")
         prod_name.innerText=prod.name
         let prod_price=document.createElement("p")
         prod_price.innerText="₹" +prod.price
         div.append(prod_name,prod_price)
         let prod_desc=document.createElement("p")
         prod_desc.innerText=prod.description
         let prod_rating_div=document.createElement("div")
         let prod_rating=document.createElement("p")
         prod_rating="★"+""+prod.rating
         prod_rating_div.append(prod_rating)
         prod_rating_div.style.backgroundColor="green"
         prod_rating_div.style.color="white"
         prod_rating_div.style.width="15%"
         prod_rating_div.style.borderRadius="4px"
         let addtoCartBtn=document.createElement("button")
         addtoCartBtn.innerText="ADD"
         addtoCartBtn.style.backgroundColor="#FFCA28"
        // addtoCartBtn.style.width="40%"
         addtoCartBtn.className="addtoCartBtn"

      //   if(localStorage.getItem("displayitem")===null) {
     //    localStorage.setItem("displayitem",JSON.stringify([]))
     //}

    
        
         addtoCartBtn.onclick=function() {
                 console.log("Yes")
              let presentitems=JSON.parse(localStorage.getItem("FaasosCart"));
              let bagcount=0;
              console.log(presentitems);
               presentitems.forEach(function (items) {
                
               if(items.name==prod.name) {
                 bagcount++;
                 //let qty=document.getElementById(qty)
                 //qty.innerText="bagcount"
                }
               }); 
               if(bagcount==1) {
                  alert("Already in Cart");
              } else {
                  addtobag(prod);
                  
               }   
               }

               if(localStorage.getItem("FaasosCart")===null) {
         localStorage.setItem("FaasosCart",JSON.stringify([]))
     }
     function addtobag(p) {
     let products_cart=JSON.parse(localStorage.getItem("FaasosCart"));
     products_cart.push(p);

     localStorage.setItem("FaasosCart",JSON.stringify(products_cart));
         }





         div2.append(prod_rating_div,addtoCartBtn)
         div.style.display="flex"
         div.style.justifyContent="space-between"
         div2.style.display="flex"
         div2.style.justifyContent="space-between"
         div3.style.padding="2%"

         div3.append(div,prod_desc,div2)
         div4.append(img,div3)

        //  console.log(midContainer+"mid")
        //  console.log(div4)
         //midContainer.append(div4+"div")
         div4.style.backgroundColor="white"
      //  }
     
      })
}
var total2;
var total_pr=document.getElementById("total")
var total_amt=document.getElementById("total-amt")
let qty=document.getElementById("qty")
let kart=JSON.parse(localStorage.getItem("FaasosCart"))
var count=0;
console.log(kart)





function cartData() {
        let cartItem=document.getElementById("cart-item")
  cartItem.innerHTML = null;
  let kart = JSON.parse(localStorage.getItem("FaasosCart"))
         
qty.innerHTML=kart.length+" "+"Item";
    kart.forEach((item)=>{
 
        console.log(item.name)
        let div=document.createElement("div")
        let div2=document.createElement("div")
        let product_name=document.createElement("p")
        product_name.innerText=item.name
        product_name.style.width="90%"

        let product_price=document.createElement("p")
        product_price.innerText="₹"+" "+item.price
        //let buttonLeft=document.createElement("button")
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
      buttonRight.style.height = "40px"

    document.querySelector(".custom-bottom").addEventListener("click", () => {
              document.querySelector(".custom-parent").classList.remove("active-custom");
            //   console.log("1",prod);
      
      let kart = JSON.parse(localStorage.getItem("FaasosCart"));
      
              kart.push(item);
              localStorage.setItem("FaasosCart", JSON.stringify(kart));

            //  cartData();
            });
      // adding funtionality to left and right button 
        buttonLeft.addEventListener('click', (event) => {
               
          let kart = JSON.parse(localStorage.getItem("FaasosCart"));
          console.log(kart)
             let index = kart.indexOf(item);
             console.log(index)
             kart.splice(index, 1);

             localStorage.setItem("FaasosCart", JSON.stringify(kart));


  
             
             cartData();
              });

          //adding addcustomisabe to right button 
          buttonRight.addEventListener('click', (event) => {
                      //adding custimable to +button
              document.querySelector(".custom-parent").classList.add("active-custom");
              show_customize(item);

                  
                
          });
        
      
        buttonLeft.style.height="40px"
      
        buttonRight.style.marginLeft="7px"
        buttonLeft.className="cartLeftBtn"
        buttonRight.className="cartRightBtn"
        let btn_img = document.createElement("img")
        if (item.type === 'veg') {
            
            btn_img.src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
        } else {
            btn_img.src = "https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png"
        }
       btn_img.style.width="12px"
       btn_img.style.height="12px"

        div2.append( buttonLeft,itemNo,buttonRight)
        div2.style.display="flex"
        div2.style.alignItems="center"
        div2.style.width="25%"
        div2.style.marginLeft="2%"
        let div3=document.createElement("div")
        div3.append(btn_img,product_name)
        div3.style.display="flex"
        div3.style.alignItems="center"
        div3.style.width="56%"
        div3.style.justifyContent="space-between"



        let cartItem=document.getElementById("cart-item")
        div.append(div3,div2,product_price)
        product_price.style.width="10%"
        product_price.style.marginLeft="2%"

        div.style.display="flex"
        div.style.alignItems="center"
        div.style.width="100%"
        cartItem.append(div)

        var total=kart.reduce(function(ac,el){ 

            return ac+ Number(el.price)
            },0)
           
            total_amt.innerHTML='₹'+total
            total_amt.style.marginLeft="0"

            var tax=0;
            tax=total*0.05
            var gsttax=document.getElementById("gsttax").innerText='₹'+" "+parseInt(tax)
             total2=total+tax
           // total3=total2
            //total4=total2
            total_pr.innerHTML='₹'+parseInt(total2)
            total_pr.style.fontWeight="700"

            
           
    })
}
cartData()


function viewCoupons(){
  var couponContainer = document.getElementById("coupon-container");


   let div=document.getElementById("coupon-div")
   div.innerHTML=null

   let div2=document.createElement("div")
   let div3=document.createElement("div")
   let div4=document.createElement("div")
   let div5=document.createElement("div")
   let div6=document.createElement("div")
   let div7=document.createElement("div")
   let div8=document.createElement("div")

   let div9=document.createElement("div")


   let couponTopBtn=document.createElement("p")
   couponTopBtn.innerText="<"
   couponTopBtn.style.cursor="pointer"
   couponTopBtn.style.marginRight="2%"
   couponTopBtn.onclick=()=>{
       couponContainer.style.display="none"
   }
   

  
   let couponTop=document.createElement("p")
   couponTop.innerText="Got an Offer/ Promo Code?"

   div6.append(couponTopBtn,couponTop)
   div6.style.display="flex"
   div6.style.alignItems="center"
   div6.style.height="60px"
   var couponBox=document.createElement("input")
   couponBox.setAttribute("type","text")
   let vertline=document.createElement("div")

   couponBox.style.width="100%"
   couponBox.style.border="none"
   couponBox.style.outline="none"

   let button3=document.createElement("p")
   button3.innerText="APPLY"
  
  
   let label=document.createElement("p")
   label.innerText="Enter code"
   label.style.marginLeft="10px"
   label.style.lineHeight="0"

   div8.append(label,couponBox)
   div8.style.width="83%"
  // div8.style.marginLeft=""
   let hr1=document.createElement("hr")
   let hr2=document.createElement("hr")
   let hr3=document.createElement("hr")
   vertline.style.height='50px'
   vertline.style.backgroundColor="black"
   vertline.style.width="1px"

   div7.append(div8,vertline,button3)
 
 
   button3.onclick=()=>{
       console.log(couponBox.value)
    applyCoupon(couponBox.value)
}

   div9.append(hr1,div7,hr2)
   div7.style.display='flex'
   
   div7.style.width="100%"
   div7.style.height="80px"
   div7.style.margin=" 5px"
   div7.style.alignItems="center"
   div7.style.justifyContent="space-between"

   let couponHeading=document.createElement("p")
   couponHeading.innerText="Available Coupons"

   let coupon1=document.createElement("p")
   coupon1.innerText="BIGSAVE"
   coupon1.style.border=" 1.5px dashed #FFA000"
   let couponDetail1=document.createElement("p")
   couponDetail1.innerText="Get Flat Rs 200 Off on all orders above 800."

   let button1=document.createElement("p")
   let button2=document.createElement("p")
   button1.innerText="APPLY"
   button2.innerText="APPLY"
   button2.style.color="indigo"
   button1.style.color="indigo"
   button1.style.cursor="pointer"
   button2.style.cursor="pointer"
   button3.style.cursor="pointer"

   let coupon2=document.createElement("p")
   coupon2.innerText="WRAPPED"
   coupon2.style.border=" 1.5px dashed #FFA000"
   coupon2.style.padding="3px 20px"
   coupon1.style.padding="3px 20px"
   coupon2.style.backgroundColor="#faf9f5"
   coupon1.style.backgroundColor="#faf9f5"
   coupon1.style.borderRadius="2px"
   coupon2.style.borderRadius="2px"

  
   let couponDetail2=document.createElement("p")
   couponDetail2.innerText="Get 60% Off Upto ₹120 on minimum order of ₹199."
  
   div2.append(coupon1,button1)
   div3.append(coupon2,button2)
   div4.append(div2,couponDetail1)

   div5.append(hr3,div3,couponDetail2)
   div4.style.height="13%"
   div4.style.margin="7px 0"
   div2.style.margin=" 14px 0"
   div5.style.margin="7px 0"
   div3.style.margin="14px 0"



   div.append(div6, div9 ,couponHeading,div4,div5)
   div.style.width="34%"
   div.style.backgroundColor="white"
   div.style.borderRadius="4px"
   div.style.height="88vh"
  div.style.padding="15px"
  div.style.position="fixed"
  div.style.top="40px"
  div.style.left="33%"
  div.style.zIndex="100"
  div.style.display="block"


   div2.style.display="flex"
   div2.style.justifyContent="space-between"
   div3.style.display="flex"
   div3.style.justifyContent="space-between"
   
  couponContainer.style.display="block"


}
var c=0
function applyCoupon(d){
    console.log(total2)

    if(d=="BIGSAVE"&&total2>=800&&c==0){
      c++
       var total12=total2-200

        total_pr.innerHTML='₹'+parseInt(total12)
        console.log(total2)
        document.getElementById('google_pay_button').innerText = `Pay ₹${parseInt(total12)}`
        document.getElementById('cod_pay_button').innerText = `Pay ₹${parseInt(total12)}`

    }else if(d=="WRAPPED"&&total2>=199&& c==0){
      var total3=0.60*total2
      console.log(total3)
      if(total3<=120){
       var total13=total2-total3
        total_pr.innerHTML='₹'+parseInt(total13)
        document.getElementById('google_pay_button').innerText = `Pay ₹${parseInt(total13)}`
        document.getElementById('cod_pay_button').innerText = `Pay ₹${parseInt(total13)}`

      }
      else{
        var total14=total2-120
        total_pr.innerHTML='₹'+parseInt(total14)
        document.getElementById('google_pay_button').innerText = `Pay ₹${parseInt(total14)}`
        document.getElementById('cod_pay_button').innerText = `Pay ₹${parseInt(total14)}`
      }
      

      // total_pr.innerHTML='₹'+parseInt(total12)
      // console.log(total2)

   }
}

function gotoCart(){
 window.location.href="cart.html"
}




var div = document.querySelector(".checkStatus");
var id;
function activate(e) {
  console.log(e.id);
  id = e.id;

  for (var i = 0; i <= 3; i++) {
    var classDiv = document.getElementById(String(i));
    if (classDiv) {
      classDiv.classList.remove("active");
      classDiv.value = "";
    }
  }
  let div = document.getElementById(id);
  div.classList.add("active");
  div.value = div.innerText;
}

// Map
var confirmBtn = document.getElementById("confirmPosition");
var onClickPositionView = document.getElementById("onClickPositionView");
var onIdlePositionView = document.getElementById("onIdlePositionView");

// Initialize locationPicker plugin
var lp = new locationPicker(
  "map",
  {
    setCurrentPosition: true, // You can omit this, defaults to true
  },
  {
    zoom: 15, // You can set any google map options here, zoom defaults to 15
  }
);

// Listen to map idle event, listening to idle event more accurate than listening to ondrag event
google.maps.event.addListener(lp.map, "idle", function (event) {
  // Get current location and show it in HTML
  var location = lp.getMarkerPosition();
  getReverseGeocodingData(location.lat, location.lng);
  let inputLat = document.querySelector("#LATITUDE_ELEMENT_ID");
  let inputLng = document.querySelector("#LONGITUDE_ELEMENT_ID");
  inputLat.value = location.lat;
  inputLng.value = location.lng;
});

async function getReverseGeocodingData(lat, lng) {
  let response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCFqHdww7qwKP8nyQ4MUNFDPAgnfzNbZAU`
  );

  let data = await response.json();
  let town = data.results[0].address_components[2].short_name;
  let address = data.results[3].formatted_address;
  appendAddress(town, address);
}

function appendAddress(town, address) {
  let townEl = document.getElementById("town");
  let addressEl = document.getElementById("address");

  townEl.innerText = town;
  addressEl.innerText = address;
}


document.getElementById("addAddress").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});
document.getElementById("closeMap").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});
const btn = document.getElementById('save')
console.log(btn+"btn")
let input = document.getElementById("landmark")
input.addEventListener("keyup",(e)=>{

  var v = e.currentTarget.value
  console.log(v)

  if(v.length>4){    
    btn.style.backgroundColor="#eebc1c"
    btn.style.color="black"

  }
  if(v.length<4){
    btn.style.backgroundColor="#d2d2d2"
    btn.style.color="white"
  }

})




/*SideBar*/
document.getElementById("ham").onclick = () => {
  document.getElementById("mySidebar").style.width = "370px";
  }
  document.getElementById("closeBtn").onclick = () => {
      document.getElementById("mySidebar").style.width = "0px";
  }
  document.getElementById("about").onclick = () => {
      window.location.href = "../footer/aboutus.html";
  }
  document.getElementById("help").onclick = () => {
      window.location.href = "../footer/help_n_support.html";
  }
  document.getElementById("profile").onclick = () => {
      window.location.href = "../profile/profile.html";
  }
  document.getElementById("orders").onclick = () => {
      window.location.href = "../profile/orders.html";
  }
  document.getElementById("addr").onclick = () => {
      window.location.href = "../profile/adress.html";
  }
  document.getElementById("pay").onclick = () => {
      window.location.href = "../profile/payments.html";
  }
  document.getElementById("logoImg").onclick = () => {
    window.location.href = "./productpage.html";
  }


//login
 let nam = document.getElementById("showName")
       let arr2 = JSON.parse(localStorage.getItem("current"))
       nam.innerText = arr2[arr2.length-1].name2

//logged name & number
document.getElementById("loggedName").innerText=arr2[arr2.length-1].name2
document.getElementById("loggedNumber").innerText=arr2[arr2.length-1].number2



// customize

// close custom 
document.getElementById("custom-close").addEventListener("click", () => {
  console.log(document.querySelector(".custom-parent"))
    document.querySelector(".custom-parent").classList.remove("active-custom");
    
});
//
// document.querySelector(".custom-bottom").addEventListener("click", () => {
//     document.querySelector(".custom-parent").classList.remove("active-custom");
//     // cartData();
// });





//function for customizable option 
function show_customize(prod) {
    let parent = document.querySelector(".custom-middle");
    let type_src = product_type(prod);
    console.log(type_src)
    parent.innerHTML = `<div class="head">
    <div><img src = ${type_src} /></div>
    <div><h3>${prod.name}</h3></div>
    </div>
    <div><p> MAKE YOUR FAVOURITE MEAL </p></div>
    <div class="custom-option">
    <div class = "option">
    <div class = "option-head">
    <div><img src ="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png" />Potato Wedges (Medium) Thums Up (250ml)</div>
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

function changeNumber(){
  let item = document.getElementById('payment_number')
  item.removeAttribute('readonly')
  item.style.color = 'black'
}


document.getElementById('google_pay_button').innerText = `Pay ₹${parseInt(total2)}`
document.getElementById('cod_pay_button').innerText = `Pay ₹${parseInt(total2)}`
