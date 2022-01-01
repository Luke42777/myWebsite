const $buttons = $(".menu nav ul li a");
const $menu = $(".menu");
const $bars = $(".fa-bars");
const $times = $(".fa-times");

$buttons.on("click", function (event) {
    event.preventDefault();
    this.classList.add("active");
    $menu.toggleClass("active");
    $bars.toggleClass("show");
    $times.toggleClass("show");
    if (this.hash !== "") {
        const hash = this.hash;
        $("html,body").animate({
            scrollTop: $(hash).offset().top
        }, 800)
    }
})