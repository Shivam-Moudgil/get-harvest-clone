import navbar from "../NAV&Footer/nav.js";
console.log(navbar);
document.getElementById("nav").innerHTML = navbar();

let nav = document.getElementById("nav");
window.onscroll = () => {
  if (document.documentElement.scrollTop >= 10) {
    nav.classList.add("nav-color");
    nav.classList.remove("nav-trans");
  } else {
    nav.classList.add("nav-trans");
    nav.classList.remove("nav-color");
  }
};

import footer from "../NAV&Footer/footer.js";
console.log(footer);
document.getElementById("foot").innerHTML = footer();

document.getElementById("logoH").addEventListener("click", () => {
  window.location.href = "./index.html";
});

document.getElementById("signupet").addEventListener("click", () => {
  window.location.href = "./signuppage.html";
});
document.getElementById("price").addEventListener("click", () => {
  window.location.href = "./pricing.html";
});
document.getElementById("harc").addEventListener("click", () => {
  window.location.href = "./index.html";
});
document.getElementById("int").addEventListener("click", () => {
  window.location.href = "./integrations.html";
});
document.getElementById("ft").addEventListener("click", () => {
  window.location.href = "./features.html";
});
document.getElementById("linkd").addEventListener("click", () => {
  window.location.href =
    "https://www.linkedin.com/in/shivam-moudgil-a44779232/";
});
