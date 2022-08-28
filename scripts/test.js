import {post_nav} from "./post_nav.js"

document.querySelector("#navbar").innerHTML=post_nav();



let email = JSON.parse(localStorage.getItem("harvestlogin"))
let f_n = document.querySelector(".nav_ele4");
// f_n.style.marginLeft="700px"
   f_n .textContent = email.firstname;
console.log(email.firstname);

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("harvestlogin");
    setTimeout(() => {
        window.location.href="./index.html"
    },2000)
})