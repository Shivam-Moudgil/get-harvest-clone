

let harvestUser=JSON.parse(localStorage.getItem("harvestUser"));
console.log(harvestUser)
document.querySelector("#signin").addEventListener("click",()=>{

  let  email=document.querySelector("#email").value;
  let password =document.querySelector("#password").value;
 

  if(checkuser(email)===true){
    let harvestUser=JSON.parse(localStorage.getItem("harvestUser"))||[];
    let user=harvestUser.filter((ele)=>{
        return email===ele.email;
    })
    if(user[0].password==password){
        alert("Signin suceuss!")
        let harvestlogin=user[0];
        localStorage.setItem("harvestlogin",JSON.stringify(harvestlogin))
        window.location.href="./welcomepage.html"
    }else{
        alert("wrong password!")
    }
  }else{
    alert("Account does't exist on this email!!")
  }
})









let checkuser=(id)=>{
    let harvestUser=JSON.parse(localStorage.getItem("harvestUser"))||[];
    harvestUser=harvestUser.filter((ele)=>{
        return id===ele.email;
    })
    if(harvestUser.length!==0){
        return true;
    }else{
        return false;
    }
}
