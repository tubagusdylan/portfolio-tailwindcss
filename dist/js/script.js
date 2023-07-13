// HAMBURGER
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.onclick = () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
};

// NAVBAR FIXED
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
