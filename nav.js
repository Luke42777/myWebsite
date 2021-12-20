const buttons = document.querySelectorAll(".menu nav ul li a");
const technoPos = document.querySelector('.techno').offsetTop;



const scrollToSection = function (event) {
    event.preventDefault();
    menu.classList.toggle("active");
    if (this.className === "tech") {
        window.scrollTo({
            top: technoPos,
            behavior: 'smooth',
          }); 
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", scrollToSection)
});
