let size=document.querySelector("#selectsize").value;
// document.getElementById("myBtn").disabled = true;


let i=4;
let addbox=()=>{
    let newin=document.createElement("input")
    newin.type="email";
    newin.setAttribute("class","emailin")
    id=`email${i}`;
    newin.placeholder="name@example.com"
    newin.setAttribute("id",id)
    i++;
    emailadd=document.querySelector("#emailadd").append(newin)
}

let postselect=()=>{
    return `<b>Invite your team now</b>
    <p  class="subhead">Exploring with teammates can help you learn Harvest, and it’s free during your trial. You can also invite them later.</p>
    <div id="emailadd">
        <input type="email" class="emailin" id="email1" placeholder="name@example.com"><br>
 <input type="email" class="emailin" id="email2"  placeholder="name@example.com"><br>
 <input type="email" class="emailin" id="email3" placeholder="name@example.com"><br>
    </div>
    <br>
    <a href="#" onclick="addbox()">Add another</a>
    <br><br>`
}
document.querySelector("#selectsize").addEventListener("change",()=>{
    size=document.querySelector("#selectsize").value;
    if(size==="select"){
        document.getElementsByTagName("button").disabled=true;
    }else{
        document.getElementsByTagName("button").disabled=false;
    }

    if(size==="select" ||size==="justme"){
        document.getElementById("cont").innerHTML = null;
    }else{
        document.getElementById("cont").innerHTML = postselect();
    }
})
document.querySelector("#nexttowlcom").addEventListener("click",()=>{
window.location.href="./secondwlcm.html"
})