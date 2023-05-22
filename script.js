const hamburger = document.querySelector(".humburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})




