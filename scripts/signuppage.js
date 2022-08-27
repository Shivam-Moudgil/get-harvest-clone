


let harvestUser=JSON.parse(localStorage.getItem("harvestUser"))||[];

document.querySelector("#createac").addEventListener("click",()=>{
    let data={
        firstname:document.querySelector("#firstname").value,
        lastname:document.querySelector("#lastname").value,
        company:document.querySelector("#company").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    }

    if(checkuser(data.email)===true){
        harvestUser.push(data);
        localStorage.setItem("harvestUser",JSON.stringify(harvestUser));
        alert("Account Created Sucessfuly")
       window.location.href="./signinpage.html"
    }else{
        alert("Already have an account with this email")
    }
})
let checkuser=(id)=>{
    let harvestUser=JSON.parse(localStorage.getItem("harvestUser"))||[];
    harvestUser=harvestUser.filter((ele)=>{
        return id===ele.email;
    })
    if(harvestUser.length===0){
        return true;
    }else{
        return false;
    }
}