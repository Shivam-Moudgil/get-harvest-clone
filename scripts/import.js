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
