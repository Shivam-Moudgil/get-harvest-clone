document.getElementById("newClient").addEventListener("click", () => {
  window.location.href = "newClient/client.html";
});

window.addEventListener("load",()=>{
    let name=JSON.parse(localStorage.getItem("clientNameForAlert"));
    if(name !== null)
    {
        document.getElementById("alertBox").style.display="block";
        document.querySelector("#alert>p:first-child").innerHTML=`<i style="color:green; font-size:20px;" class="fa-solid fa-check"></i> <b>${name}</b> has been added.`;
        console.log(name);
    }
})

document.getElementById("dismiss").addEventListener("click",()=>{
    dismissAlert();
})    
let dismissAlert=()=>{
    document.getElementById("alertBox").style.display="none";
    localStorage.setItem("clientNameForAlert",null);
}

let clients = JSON.parse(localStorage.getItem("clients"));
console.log(clients);

let showClientsInfo = (data) => {
  let cont = document.getElementById("mainContainer1");
  cont.innerHTML = null;
  data.forEach((ele) => {
    let clientCont = document.createElement("div");
    clientCont.setAttribute("id", "clientCont");

    let client = document.createElement("div");
    client.setAttribute("id", "client");
    let div = document.createElement("div");
    let button = document.createElement("button");
    button.innerText = "Edit";
    let h3 = document.createElement("h3");
    h3.innerText = ele.name;

    let btn = document.createElement("button");
    btn.innerText = "+ Add contact";

    let contact = document.createElement("div");
    contact.setAttribute("id", "contact");

    let hr = document.createElement("hr");

    div.append(button, h3);
    client.append(div, btn);
    clientCont.append(client, contact);
    cont.append(clientCont);
  });
};
showClientsInfo(clients);

import  {bottom}  from "../components/bottom.js";
document.getElementById("bottom").innerHTML = bottom();

