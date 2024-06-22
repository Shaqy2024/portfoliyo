const cvbtn = document.getElementById("cvbtn");
const subt = document.getElementById("sub");
const ratt = document.getElementById("ratting")
const mtp = document.getElementById("imt")
const proj2 = document.getElementById("project2")
const proj3 = document.getElementById("project3")

console.log(mtp)

function portfolio(){
      prompt("whats yor name");
      // alert("whats yor name");
}

cvbtn.addEventListener('click', ()=>{
      // alert("Downlode succesull")
     let tim =  setTimeout(()=>{
 document.getElementById("pub").innerHTML = "Downlodeing Successfull";
      },2000);
      document.getElementById("pub").style.color = "rgb(0, 157, 255)"


})

// subt.addEventListener('click', ()=>{
//      let email = document.getElementById("email")
//      let pass = document.getElementById("pass")
//      if(email.value == "" && pass.value == ""){

//       // alert("Plise fill Details")
//       setTimeout(() => {
//       document.getElementById("res").innerHTML = "Please fill this peg"
//      },500);
//      }else{
//       // alert("Logged IN")
//         setTimeout(() => {
//        let tes = document.getElementById("res").innerHTML = "Thank you , you are loged In"
//             document.getElementById("res").style.color = "rgb(0, 157, 255)";
//      },1000);

//      }

// })


mtp.addEventListener("click",()=>{

     document.getElementById("chek").innerHTML = " Click on the check button"
})


proj2.addEventListener("click",()=>{
      document.getElementById("pro2").innerHTML = "Click on the check button";
})


proj3.addEventListener("click",()=>{
      document.getElementById("pro3").innerHTML = "Click on the check button";
})

subt.addEventListener("click",()=>{
      let email = document.getElementById("email")
      if(email.value==""){
         document.getElementById("inp2").innerHTML = "plise enter value"      
      }else{
            setTimeout(()=>{
                   document.getElementById("pope").style.display = "block";
            },500)
          
      }
         
      
})


subt.addEventListener("click",()=>{
      let pass = document.getElementById("pass")
      if(pass.value==""){
         document.getElementById("inp3").innerHTML = "plise enter value"      
      }else{
            setTimeout(()=>{
                   document.getElementById("pope").style.display = "block";
            },1000)
          
          
      }
         
      
})









