$(function() {
    var toolTop = $(".recommend").offset().top;
    $(window).scroll(function() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn()
        } else {
            $(".fixedtool").fadeOut()

        }
    })
    $(".fixedtool li").click(function() {
        console.log($(this).index());
        var current = $(".floor .w").eq($(this).index()).offset().top;
        current.animate({

        })
    })
})