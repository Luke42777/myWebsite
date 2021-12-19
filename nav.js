const buttons = document.querySelectorAll(".menu nav ul li a");


const fillButton = function (event) {
    event.preventDefault();

}

buttons.forEach(btn => {
    btn.addEventListener("click", fillButton)
});
