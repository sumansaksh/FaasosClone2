import yellow from "./yellow.js"
let navbar_div = document.getElementById("lemon");
navbar_div.innerHTML=yellow()

import  {holder} from "./profile.js"
  const n = new holder();
  n.operation()

  import  {Dholder} from "./profile.js"
  const Dn = new Dholder();
  Dn.Doperation()

 
  let hr1 = document.getElementById("hr1")
 

      
      hr1.style.height = "0.4vh"
      hr1.style.backgroundColor = "#564099";
      hr1.style.borderRadius = "5px"


      import foot from "../footer/footer.js";
document.getElementById("big5").innerHTML = foot;


import {nav,sid} from "../Nav_bar/navbar.js";
document.getElementById("navbar2").innerHTML = sid;
document.getElementById("navbar").innerHTML = nav;


document.getElementById("ham").onclick = () => {
  document.getElementById("navbar2").style.width = "370px";
  }
  document.getElementById("closeBtn").onclick = () => {
      document.getElementById("navbar2").style.width = "0px";
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
    window.location.href = "../productpage/productpage.html";
  }
  
  let name = document.getElementById("showName")
        let arr2 = JSON.parse(localStorage.getItem("current"))
        name.innerText = arr2[arr2.length-1].name2

        
        
        


