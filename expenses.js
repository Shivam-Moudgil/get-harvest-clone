document.getElementById("track").addEventListener("click",()=>{
    document.getElementById("expensesForm").style.display="block";
    document.querySelector("#trackExp>#team").style.display="none";
    document.getElementById("teammates").style.display="none";
});

document.getElementById("team").addEventListener("click",()=>{
    document.getElementById("teammates").style.display="block";
}) 
    

