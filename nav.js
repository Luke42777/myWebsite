const buttons = document.querySelectorAll(".menu nav ul li a");
const technoPos = document.querySelector('.techno').offsetTop;
const portfolioPos = document.querySelector('.portfolio').offsetTop;
console.log(portfolioPos);



const scrollToSection = function (event) {
    event.preventDefault();
    menu.classList.toggle("active");
    bars.classList.toggle("show");
    times.classList.toggle("show");
    if (this.className === "tech") {
        window.scrollTo({
            top: technoPos,
            behavior: 'smooth',
        });
    }
    else if (this.className === "portf") {
        window.scrollTo({
            top: 1766,
            behavior: 'smooth',
        });
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", scrollToSection)
});
