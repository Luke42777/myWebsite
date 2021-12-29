
$(document).on("scroll", () => {
    const $scrollValue = $(this).scrollTop();
    const $spotToAnimate1 = $("section.hobby").offset().top - 40;
    const $spotToAnimate2 = $("section.hobby div.eat").offset().top;
    const $spotToAnimate3 = $("section.hobby div.climb").offset().top;

    if ($scrollValue >= $spotToAnimate1) {
        $("section.hobby div.climb").addClass("active");
        $("section.hobby div.eat").addClass("active");
    }
    if ($scrollValue > $spotToAnimate2) {
        $("section.hobby div.walk").addClass("active");
    }
    if ($scrollValue > $spotToAnimate3) {
        $("section.hobby div.paint").addClass("active");
    }
    //cleaner
    if ($scrollValue < 100) {
        $('section.hobby div').removeClass('active');
    }
})



