document.querySelector("#buttons>#cancel").addEventListener("click",()=>{
    window.location.href="../manage.html";
});

document.querySelector("#buttons>#saveClient").addEventListener("click",()=>{
    getData();
});

let clients=JSON.parse(localStorage.getItem("clients")) || [];
console.log(clients);

let getData=()=>{
    let client={
        name:document.getElementById("name").value,
        address:document.getElementById("textarea").value,
        currency:document.getElementById("client_currency_code").value,
    };
    clients.push(client);
    localStorage.setItem("clients",JSON.stringify(clients));
    localStorage.setItem("clientNameForAlert",JSON.stringify(client.name));
    window.location.href="../manage.html";
}


import { bottom } from "../../components/bottom.js";
document.getElementById("bottom").innerHTML=bottom();
console.log(bottom());
