// import { request } from "https";

const navLinks = document.querySelectorAll("#navbar a");

// navLinks.forEach(elem => elem.addEventListener("click", smoothScroll));

navLinks[0].addEventListener("click", smoothScroll);
navLinks[1].addEventListener("click", smoothScroll);

// Approach 1

function smoothScroll(event){
    event.preventDefault();
    const targetID = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: targetID==="#" ? 0 : document.querySelector(targetID).offsetTop,
        behavior: "smooth"
    });
}