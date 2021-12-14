// export default class holder {
//      operation(){
       
        
//     }
// }


export  class holder {
    operation(){
    //console.log("suman");
    let arr2 = JSON.parse(localStorage.getItem("current"))
    let name=document.getElementById("name")
    let email = document.getElementById("email")
    let number=document.getElementById("number")
    
    name.innerText = arr2[arr2.length-1].name2
    number.innerText = arr2[arr2.length-1].number2
    email.innerText = arr2[arr2.length-1].email2

    }
}

export  class Dholder {
    Doperation(){
        let arr2 = JSON.parse(localStorage.getItem("current"))
    let n = document.getElementById("n")
    n.innerText=arr2[arr2.length-1].name2

    let p = document.getElementById("p")
    p.innerText = arr2[arr2.length-1].number2

    let e = document.getElementById("e")
    e.innerText = arr2[arr2.length-1].email2
    }
}



