let t1=0;
 let tic1=document.querySelector("#tick1")
 tic1.addEventListener("click",()=>{
    if(t1==0){
        tic1.style.backgroundColor="#fca976";
        t1=1;
    }else{
        tic1.style.backgroundColor="white";
        t1=0;
    }
})