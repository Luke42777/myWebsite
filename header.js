const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");
const burger = document.querySelector(".burger");
const menu = document.querySelector("aside.menu");


burger.addEventListener("click", () => {
    bars.classList.toggle("show");
    times.classList.toggle("show");
    menu.classList.toggle("active");
});




