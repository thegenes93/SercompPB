$(document).ready(function () {
    $("body").height($(window).height())
    $("body").width($(window).width())
});
$(window).resize(function () {
    $("body").height($(window).height())
    $("body").width($(window).width())
});


$('nav a').click(function (event) {

    var id = $(this).attr('href'),
        targetOfset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOfset - 75
    }, 500);
});




function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

(function () {
    var offset = $(window).height() * 7/8,
        target1 = $('.animacao'),
        class1 = 'fazer-animacao',
        target2 = $('.animacao2'),
        class2 = 'fazer-animacao2';

    function animarAoRolar(target, ClasseAdicionar) {
        var topoDoDocumento = $(document).scrollTop();
        $(target).each(function () {
            var topoDoItem = $(this).offset().top;
            if (topoDoDocumento > topoDoItem - offset) {
                $(this).addClass(ClasseAdicionar);
            } else {
                $(this).removeClass(ClasseAdicionar);
            }
        })
    }

    animarAoRolar(target1, class1);
    animarAoRolar(target2, class2);

    $(document).scroll(debounce(
        function () {
            animarAoRolar(target1, class1);
            animarAoRolar(target2, class2);

        }, 100
    ));
}());

