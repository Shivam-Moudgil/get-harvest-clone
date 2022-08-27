

let harvestlogin=JSON.parse(localStorage.getItem("harvestlogin"));


let nexttowlcom=document.querySelector("#nexttowlcom");
nexttowlcom.addEventListener("click",()=>{
    let details={
        client:document.querySelector("#client").value,
        project:document.querySelector("#project").value,
        budget:document.querySelector("#budget").value,
        costs:document.querySelector("#costs").value,
    }
 
    harvestlogin.data=(details);
    
    console.log(harvestlogin);
    localStorage.setItem("harvestlogin",JSON.stringify(harvestlogin))
   
    window.location.href="./laststep.html"
})





