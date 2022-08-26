

let harvestlogin=JSON.parse(localStorage.getItem("harvestlogin"));


let nexttowlcom=document.querySelector("#nexttowlcom");
nexttowlcom.addEventListener("click",()=>{
    let details={
        client:document.querySelector("#client").value,
        project:document.querySelector("#project").value,
        budget:document.querySelector("#budget").value,
        costs:document.querySelector("#costs").value,
    }
    if(harvestlogin.data===undefined){
        harvestlogin.data=[];
        harvestlogin.data.push(details);
    }else{
        harvestlogin.data.push(details);
    }
    
    console.log(harvestlogin);
    localStorage.setItem("harvestlogin",JSON.stringify(harvestlogin))
    let harvestUser=JSON.parse(localStorage.getItem("harvestUser"))
    //console.log(harvestUser)
    for(let i=0; i<harvestUser.length; i++){
        if(harvestUser[i].email=harvestlogin.email){
            harvestUser[i]=harvestlogin;
        }
    }
    localStorage.setItem("harvestUser",JSON.stringify(harvestUser))
    console.log(harvestUser)

    window.location.href="./laststep.html"
})

// localStorage.clear();




