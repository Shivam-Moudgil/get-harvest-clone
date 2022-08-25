
document.getElementById("newClient").addEventListener("click",()=>{
    window.location.href="newClient/client.html"
})

let clients=JSON.parse(localStorage.getItem("clients"));
console.log(clients)

let showClientsInfo=(data)=>{
    let cont=document.getElementById("mainContainer1");
    cont.innerHTML=null;
    data.forEach((ele)=>{
        let clientCont=document.createElement("div");
        clientCont.setAttribute("id","clientCont");

            let client=document.createElement("div");
            client.setAttribute("id","client");
                let div=document.createElement("div");
                    let button=document.createElement("button");
                    button.innerText="Edit";
                    let h3=document.createElement("h3");
                    h3.innerText=ele.name;
                    
                let btn=document.createElement("button");
                btn.innerText="+ Add contact"

            let contact=document.createElement("div");
            contact.setAttribute("id","contact");

            let hr=document.createElement("hr");

            div.append(button,h3);
            client.append(div,btn);
            clientCont.append(client,contact);
            cont.append(clientCont,);
    });
};
showClientsInfo(clients);


import { bottom } from "../components/bottom.js";
document.getElementById("bottom").innerHTML=bottom();