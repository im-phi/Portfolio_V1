import { request } from "https";

const navMenu = document.querySelector(".navbar ul");
const navLinks = document.querySelector(".navbar a");

// navbarLinks.array.forEach(elem => elem.addEventListener("click", navbarLinkClink));

// Approach 1

function smoothScroll(event){
    event.preventDefault();
    const targetID = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: targetID==="#" ? 0 : document.querySelector(targetID).offsetTop,
        behavior: "smooth"
    })
}