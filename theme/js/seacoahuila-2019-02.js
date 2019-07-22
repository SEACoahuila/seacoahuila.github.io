(function($) {
    "use strict"; // Start of use strict

    // Set style to tables
    $(document).ready(function () {
        $("article table").addClass("table table-bordered table-hover");
    });

})(jQuery); // End of use strict

/* Cambiar color de menu al hacer scroll */
$(document).scroll(function(){
    if($(this).scrollTop() > 504)
    {
        $('.sea-bg-green-dark').css({"background-color":"#344E33"});
    }
    else
    {
        $('.sea-bg-green-dark').css({"background-color":"#3B6038"});
    }
});

/* linea a menu activo */
$('#navbarResponsive a').on('click', function () {
    $('#navbarResponsive a').removeClass('selected');
    $(this).addClass('selected');
});

/* jQuery comité */
$(document).ready(function() {
    $('#slider').nivoSlider();
    $('a.video-que-es').colorbox({iframe:true, innerWidth:500, innerHeight:409});
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    var $active = $('#m0');
    $('.miembros-full .miembro').not($active).hide();
    function activate($item) {
        $item.fadeIn(500);
        $active.not($item).fadeOut(0);
        $active = $item;
    }
    $('.miembros-prev .miembro').click(function(event) {
        event.preventDefault();
        activate($($(this).find('a').attr('href')));
    });
    $(".miembros-full .close-it").click(function() {
        $(this).parent(".miembro").fadeOut(500);
    });
});
