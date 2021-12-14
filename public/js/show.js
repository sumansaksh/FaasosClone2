 /*
 function showproducts(product){
    const newproduct=JSON.parse(product)
   // console.log((newproduct.name))
  }
*/
 

var midContainer=document.getElementById('mid-container')

       var midContainer1=document.getElementById("mid-container1")
         var midContainer2=document.getElementById("mid-container2")
         var midContainer3=document.getElementById("mid-container3")
         var midContainer4=document.getElementById("mid-container4")
         var midContainer5=document.getElementById("mid-container5")
         var midContainer6=document.getElementById("mid-container6")
         var midContainer7=document.getElementById("mid-container7")
         var midContainer8=document.getElementById("mid-container8")
         var midContainer9=document.getElementById("mid-container9")

         var midContainer10=document.getElementById("mid-container10")

        

  function showData(products){
      const product=JSON.parse(products)
      //console.log(products)

    midContainer1.innerHTML=null
    midContainer2.innerHTML=null
    midContainer3.innerHTML=null
    midContainer4.innerHTML=null
    midContainer5.innerHTML=null
    midContainer6.innerHTML=null
    midContainer7.innerHTML=null
    midContainer8.innerHTML=null
    midContainer9.innerHTML=null
    midContainer10.innerHTML=null
  
  
        product.forEach((prod)=>{

           // console.log(prod.name)
  
          let div=document.createElement("div")
          let div2=document.createElement("div")
          let div3=document.createElement("div")
          let div4=document.createElement("div")
          let div5=document.createElement("div")
          let div6=document.createElement("div")
          let img=document.createElement("img")
            img.src = prod.img
            img.onclick = () => {
                localStorage.setItem("single-prod", JSON.stringify(prod));
                
              window.location.href="single_product.html"
          }
           img.style.width="100%"
           let prod_name=document.createElement("p")
           prod_name.innerText=prod.name
           prod_name.style.fontSize="15px"
           prod_name.style.fontWeight="700"
           prod_name.style.color="black"
           prod_name.style.width="75%"
           let prod_price=document.createElement("p")
            let btn_img = document.createElement("img");
         // btn_img.src=  product_type(prod, btn_img);
           
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
            prod_desc.innerText = prod.description;
            prod_desc.setAttribute("class", "prod_desc");
          //  prod_desc.style.height="16px"
          //  prod_desc.style.overflow="hidden"
           let readmore=document.createElement('p')
           readmore.innerText="Read More"
           readmore.style.cursor="pointer"
  
  
            readmore.onclick = () => {
                localStorage.setItem("single-prod", JSON.stringify(prod));
               
              window.location.href="single_product.html"
          }
  
  
  
           let prod_rating_div=document.createElement("div")
            let prod_rating = document.createElement("p")
            prod_rating_div.setAttribute("class", "prod-rating");
           prod_rating="★"+" "+prod.rating
           prod_rating_div.append(prod_rating)
            prod_rating_div.style.backgroundColor = "#4caf50"
            prod_rating_div.style.height = "25px";
  
           prod_rating_div.style.color="white"
           prod_rating_div.style.width="50px"
            prod_rating_div.style.textAlign = "center";
            prod_rating_div.style.lineHeight = '25px'
           prod_rating_div.style.borderRadius="2px"
           let addToCart=document.createElement("button")
           addToCart.innerText="ADD"
           addToCart.style.cursor="pointer"
           addToCart.style.backgroundColor="#FFCA28"
           addToCart.style.width="85%"
           let custom_text=document.createElement("p")
           custom_text.innerText="customisable"
           custom_text.style.fontSize="10px"
            custom_text.style.lineHeight = "0"
            
            let reviews = document.createElement("p");
            reviews.innerHTML = prod.reviews + " bought this";
            reviews.setAttribute("class", "reviews");
  
  
          //  //for customisable
  
          //  custom_text.onclick=()=>{
  
          //  }
  
           div6.append(addToCart,custom_text)
           div6.style.textAlign="center"
           div6.style.width="50%"
          // addToCart.style.width="40%"
            addToCart.className = "addtoCartBtn"
            
            
  
        
  
      /*
          
           addToCart.onclick=function() {
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
                // alert("Already in Cart");
                 } else {
                     addtobag(prod);
                    
               }   	
                  }
          */
            
            addToCart.addEventListener("click", addtocart);
            function addtocart(event) {
                let ans = document.getElementsByClassName("addtoCartBtn");
              //   console.log(ans);
                
  
  
                //add active class to the customize
                document.querySelector(".custom-parent").classList.add("active-custom");
                show_customize(prod);
              //   console.log("1",event.target)
  
  
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
                      //   qty.innerText = curent+1;
                        
                });
  
                //hello the
            document.querySelector(".custom-bottom").addEventListener("click", () => {
                document.querySelector(".custom-parent").classList.remove("active-custom");
              //   console.log("1",prod);
               
             addtobag(prod)
             /* 
              let kart = JSON.parse(localStorage.getItem("FaasosCart"));
                kart.push(prod);
                localStorage.setItem("FaasosCart", JSON.stringify(kart));
  
             */
  
               // cartData();
              });
          
            };
          
  
         var itemsArr=[]
                 if(localStorage.getItem("FaasosCart")===null) {
           localStorage.setItem("FaasosCart",JSON.stringify([]))
       }
      
      async function addtobag(p) {
  
        let products_cart= await JSON.parse(localStorage.getItem("FaasosCart"));
  
       /* if(localStorage.getItem("FaasosCart")===null) {
        itemsArr.push(p)
       // console.log(itemsArr)
        localStorage.setItem("FaasosCart",JSON.stringify(itemsArr));
        window.location.reload()
  
        }else{
          let products_cart= await JSON.parse(localStorage.getItem("FaasosCart"));
          products_cart.map(data=>{
            if(data.name==p.name){
  
            }
            else{
              itemsArr.push(data)
              console.log(itemsArr)
              localStorage.setItem("FaasosCart",JSON.stringify(itemsArr));
                            
            }
          })
          itemsArr.push(p)
         localStorage.setItem("FaasosCart",JSON.stringify(itemsArr))
  window.location.reload()
  */
       products_cart.push(p);
       //console.log(productsArray[0])
  
       localStorage.setItem("FaasosCart",JSON.stringify(products_cart));
       window.location.reload()
       window.scrollTo(0,0)
       cartData()
       // }
           }
  
  
  
  
            let div_rating_reviews = document.createElement('div');
            div_rating_reviews.append(prod_rating_div, reviews);
           div2.append(div_rating_reviews,div6)
           div.style.display="flex"
           div.style.justifyContent="space-between"
           //div.style.alignItems="center"
           div2.style.display="flex"
           div2.style.height="40px"
           div2.style.justifyContent="space-between"
           div3.style.padding="0 10px 20px 10px"
  
  
  
  
           
  
           div3.append(div,prod_desc ,readmore,div2)
           // div4.append(img, div3)
           // midContainer.append(div4)
           let p10=document.createElement("p")
           let div10=document.createElement("div")
           div10.appendChild(p10)
           let hr5=document.createElement("hr")
     
          
         let P1=document.getElementById("p1")
         let P2=document.getElementById("p2")
         let P3=document.getElementById("p3")
         let P4=document.getElementById("p4")
         let P5=document.getElementById("p5")
         let P6=document.getElementById("p6")
         let P7=document.getElementById("p7")
         let P8=document.getElementById("p8")
         let P9=document.getElementById("p9")
         let P10=document.getElementById("p10")
     
     //scroll function starts
     
        P1.addEventListener("click",myFunction1)
         function myFunction1() {
         // var elmnt = document.getElementById("midContainer1");
          //P1.style.color="black"
     
          window.scrollTo(0,200);
     
         }
         
         P2.addEventListener("click",myFunction2)
          function myFunction2() {
           var elmnt = document.getElementById("midContainer2");
           //elmnt.scrollIntoView();
          
           
             window.scrollTo(0,1570);
         }
     
         P3.addEventListener("click",myFunction3)
         function myFunction3() {
           var elmnt = document.getElementById("mid-container3");
          // elmnt.scrollIntoView();
           window.scrollTo(0,3700);
     
         }
         P4.addEventListener("click",myFunction4)
         function myFunction4() {
           //var elmnt = document.getElementById("mid-container4");
           window.scrollTo(0,5050);
         }
         P5.addEventListener("click",myFunction5)
         function myFunction5() {
          // var elmnt = document.getElementById("mid-container5");
           window.scrollTo(0,6830);
         }
         P6.addEventListener("click",myFunction6)
         function myFunction6() {
           var elmnt = document.getElementById("mid-container5");
           window.scrollTo(0,7780);
         }
         P7.addEventListener("click",myFunction7)
         function myFunction7() {
           var elmnt = document.getElementById("mid-container5");
           window.scrollTo(0,8700);
         }
  
         P8.addEventListener("click",myFunction8)
         function myFunction8() {
           var elmnt = document.getElementById("mid-container5");
           window.scrollTo(0,9600);
         }
         P9.addEventListener("click",myFunction9)
         function myFunction9() {
           var elmnt = document.getElementById("mid-container5");
           window.scrollTo(0,10500);
         }
         P10.addEventListener("click",myFunction10)
         function myFunction10() {
           var elmnt = document.getElementById("mid-container5");
           window.scrollTo(0,11430);
         }
         //scroll function ends
     
         let test=document.querySelector(".col-left")
           // test.style.overflow="scroll"
           // test.style.height="10%"
           let mid=document.querySelector('#mid-container')
  /*
       document.body.onscroll = logScroll
  
      function logScroll(e) {
        if(e.target.top>200){
          P1.style.fontWeight="bold"
  
        }
     }
     */
         
        document.body.onscroll = function() {myFunction()};
     
     function myFunction() {
       if (document.documentElement.scrollTop<300 ) {
         //let P1=document.getElementById("p1")
     
         P1.style.fontWeight="bold"
     
       }else{
        P1.style.fontWeight="normal"
  
       }
       
        if ( document.documentElement.scrollTop<500  ) {
         //let P1=document.getElementById("p1")
     
         P2.style.fontWeight="bold"
     
       }else {
        P2.style.fontWeight="normal"
  
       }
       
       if (document.documentElement.scrollTop<1000 ) {
         //let P1=document.getElementById("p1")
     
         P3.style.fontWeight="bold"
     
       }else{
        P3.style.fontWeight="normal"
  
       }
        if (document.documentElement.scrollTop<1800 ) {
         //let P1=document.getElementById("p1")
     
         P4.style.fontWeight="bold"
     
       }
       
       else{
        P4.style.fontWeight="normal"
     
     
       }
  
       if (document.documentElement.scrollTop<1800 ) {
        //let P1=document.getElementById("p1")
    
        P5.style.fontWeight="bold"
    
      }
      
      else{
       P5.style.fontWeight="normal"
    
    
      }
      if (document.documentElement.scrollTop<1800 ) {
        //let P1=document.getElementById("p1")
    
        P6.style.fontWeight="bold"
    
      }
      
      else{
       P6.style.fontWeight="normal"
    
    
      }
      if (document.documentElement.scrollTop<1800 ) {
        //let P1=document.getElementById("p1")
    
        P7.style.fontWeight="bold"
    
      }
      
      else{
       P7.style.fontWeight="normal"
    
    
      }
      if (document.documentElement.scrollTop<1800 ) {
        //let P1=document.getElementById("p1")
    
        P8.style.fontWeight="bold"
    
      }
      
      else{
       P8.style.fontWeight="normal"
    
    
      }
      if (document.documentElement.scrollTop<1800 ) {
        //let P1=document.getElementById("p1")
    
        P9.style.fontWeight="bold"
    
      }
      
      else{
       P9.style.fontWeight="normal"
    
    
      }
      if (document.documentElement.scrollTop<1800 ) {
        //let P1=document.getElementById("p1")
    
        P10.style.fontWeight="bold"
    
      }
      
      else{
       P10.style.fontWeight="normal"
    
    
      }
     }
     
     
     
              if(prod.category=="Fab Wraps starting at 99 each" ){
              let div4=document.createElement("div")
               div4.append(img, div3)
               midContainer1.append(div4)
               div4.style.backgroundColor="white"
                    div4.setAttribute("class", "prod_card")
  
     
              // midContainer.append(p11,div20)
             }
             
              if(prod.category=="Daily Value Wrap Combos (Save Upto 40% Extra)"){
                  let div4=document.createElement("div")
                    div4.setAttribute("class", "prod_card")
  
                 div4.append(img, div3)
                 midContainer2.append(div4)
                 div4.style.backgroundColor="white"
  
              }
              // console.log(prod.category)
                if(prod.category=="Combos for 1 (Save upto 15% Extra)"){
                  let div4=document.createElement("div")
                    div4.setAttribute("class", "prod_card")
                 div4.append(img, div3)
                 midContainer3.append(div4)
                 div4.style.backgroundColor="white"
  
       
                }
                if(prod.category=="New Launches"){
                  let div4=document.createElement("div")
                    div4.setAttribute("class", "prod_card")
  
                 div4.append(img, div3)
                 midContainer4.append(div4)
                 div4.style.backgroundColor="white"
  
       
                }
                if(prod.category=="Combos for 4 (Upto 25% Savings)"){
                  let div4=document.createElement("div")
                    div4.setAttribute("class", "prod_card")
  
                 div4.append(img, div3)
                 midContainer5.append(div4)
                 div4.style.backgroundColor="white"
  
                }
                if(prod.category=="Signature Wraps"){
               let div4=document.createElement("div")
                    div4.setAttribute("class", "prod_card")
  
                 div4.append(img, div3)
              midContainer6.append(div4)
              div4.style.backgroundColor="white"
  
       
                }
                if(prod.category=="Classic Wraps"){
                  let div4=document.createElement("div")
                    div4.setAttribute("class", "prod_card")
  
                 div4.append(img, div3)
                 midContainer7.append(div4)
                 div4.style.backgroundColor="white"
  
       
                }
                if(prod.category=="Desserts"){
                  let div4=document.createElement("div")
                    div4.setAttribute("class", "prod_card")
  
                 div4.append(img, div3)
                 midContainer10.append(div4)
                 div4.style.backgroundColor="white"
  
       
                }
                if(prod.category=="Sides And Beverages"){
                  let div4=document.createElement("div")
                    div4.setAttribute("class", "prod_card")
  
                 div4.append(img, div3)
                 midContainer8.append(div4)
               
                 div4.style.backgroundColor="white"
  
                }
                if(prod.category=="Combos for 2 (Save upto 25% Extra)"){
                  let div4=document.createElement("div")
                    div4.setAttribute("class", "prod_card")
  
                 div4.append(img, div3)
                 midContainer9.append(div4)
               
                 div4.style.backgroundColor="white"
  
                }
                
                
                
                
             
     
  
  
  
  
          //   OPENING A NEW PAGE FOR INDIVIDUAL PRODUCT
            div.onclick = ()=>{
                
                localStorage.setItem("single-prod", JSON.stringify(prod));
                window.location.href = "single_product.html";
          
                
            }
           div4.style.cursor="pointer"
           midContainer.append(div4)
           //midContainer.style.position="sticky"
          // midContainer.style.top="100px"
           div4.style.backgroundColor="white"
        //  }
            
          
            
            
            
        })
  }
  
  /*mid end*/
  