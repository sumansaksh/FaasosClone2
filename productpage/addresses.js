

async function saveAddress() {
  let lat = document.querySelector("#LATITUDE_ELEMENT_ID").value;
  let lng = document.querySelector("#LONGITUDE_ELEMENT_ID").value;
  let house = document.getElementById("house").value;
  let landmark = document.getElementById("landmark").value;
  
  
  let response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCFqHdww7qwKP8nyQ4MUNFDPAgnfzNbZAU`);
  
  let data = await response.json();
  let address = data.results[3].formatted_address;
  
  if (id == "1") {
  var addressType = "home";
  } else if (id == "2") {
  var addressType = "work";
  } else if (id === "3") {
  var addressType = "others";
  }
  
  
  let addressForm = {
    houseNo: house,
    landmark: landmark,
    address:address,
    addressType: addressType,
  }; 
  let savedAddress = JSON.parse(localStorage.getItem("Address"))
  if(savedAddress){
  savedAddress.push(addressForm)
  localStorage.setItem("Address", JSON.stringify(savedAddress));
  }else{ 
    localStorage.setItem("Address", JSON.stringify([addressForm]));
  }
  
  house = "";
  landmark = "";
  document.querySelector(".bg-modal").style.display = "none";
  appendAddresses()
  }
// Payment Sectioin 

var div = document.querySelector(".checkPayment");
var id;
function activatePayment(e) {            
   
  id = e.id; 

  for (var i = 0; i <= 4; i++) {
    var classDiv = document.getElementById('payment_method_'+String(i));
    var showDiv = document.getElementById('paymentType'+String(i));
    if (classDiv && showDiv) {
      classDiv.classList.remove("payActive");
      console.log('ok');
      classDiv.value = "";
      showDiv.style.display = 'none'
    }
  }
  let idIndex = id[id.length-1]
  let leftDiv = document.getElementById(id); 
  let rightDiv = document.getElementById('paymentType'+String(idIndex));
  leftDiv.classList.add("payActive");
  leftDiv.value = div.innerText;

  rightDiv.style.display = 'block'


if(id === 'payment_method_1'){



}else if('payment_method_2'){
  let value = JSON.parse(localStorage.getItem("faasosUser"))
  document.getElementById('payment_number').value = value[0].number

}else if('payment_method_3'){
  console.log(e.id);
}else if('payment_method_4'){
  console.log(e.id);
}



}



var div = document.querySelector(".checkStatus");
var id;
function activate(e) {
  // console.log(e.id);
  id = e.id;

  for (var i = 0; i <= 3; i++) {
    var classDiv = document.getElementById(String(i));
    if (classDiv) {
      classDiv.classList.remove("active");
      classDiv.value = "";
    }

  }

let setdiv = document.getElementById(id);
setdiv.classList.add("active");
setdiv.value = div.innerText;
}


  // AppendAddresses
  function appendAddresses(){
    let savedAddress = JSON.parse(localStorage.getItem("Address"))
    if(savedAddress.length > 0){
    
    savedAddress.forEach((el)=>{
      let parent = document.getElementById('cart-address')
      let addressDiv = document.createElement('div')
      let addressTop = document.createElement('div')
      let addressBottom = document.createElement('div')
      let choose = document.createElement('button')
      addressDiv.classList.add('addresses')
     addressTop.classList.add('addresses_top')
     addressBottom.classList.add('addresses_bottom')
      let icon = document.createElement('i')
      if(el.addressType == 'home'){
        icon.classList.add('fas')
        icon.classList.add('fa-home')
      }else if(el.addressType == 'work'){
        icon.classList.add('fas')
        icon.classList.add('fa-briefcase')
    
      }else if(el.addressType == 'other'){
        icon.classList.add('fas')
        icon.classList.add('fa-map-marker')
      }
      let p = document.createElement('p')
      p.classList.add('address_text')
      p.innerText = `${el.houseNo},${el.landmark},${el.address}`
      let h3 = document.createElement('h3')
      h3.innerText = el.addressType
  
      choose.innerText = 'DELIVER HERE'
      choose.classList.add('deliver_btn')
  
  
  
    addressTop.append(icon,h3)
    addressBottom.append(p,choose)
      addressDiv.append(addressTop,addressBottom)
      parent.append(addressDiv) 
    })
    }
  }
    appendAddresses()
    
