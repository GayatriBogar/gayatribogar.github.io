// =========================================================
// MOBILE NAVIGATION MENU
// =========================================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");


// Open / close mobile menu
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("mobile-active");

});


// Close menu after clicking a navigation link
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("mobile-active");

    });

});


// Close menu when pressing Escape
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navMenu.classList.remove("mobile-active");

    }

});