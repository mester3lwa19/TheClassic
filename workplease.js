/*global $, alert, console*/
$(document).ready(function(){
/* start header */
    var header = $(".header");
    header.height($(window).height());
   
    $(window).resize(function(){
        header.height($(window).height());
    });
     // start add active class to links

     $(".links li a").click(function(){
         $(this).parent().addClass("active").siblings().removeClass("active")
     })
     // end add active class to links

     // trigger bxslider
     $('.bxslider').bxSlider( { pager:false} );
/* end header */

/* start our services */

// smooth scroll to div 
    $(".links li a").click(function(){
        $("html, body").animate({
            scrollTop:$("#" + $(this).data("value")).offset().top
        },1000)
    });
/* end our services */

/* start testmonial */

    // our auto slider
    (function autoslider(){
        $(".slider .active").each(function(){
            if(!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(3000,function(){
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    autoslider();
                });
            } else {
                $(this).delay(3000).fadeOut(3000,function(){
                    $(this).removeClass("active");
                    $(".slider div").eq(0).addClass("active").fadeIn();
                    autoslider();
                })
            }
        });
    }());

/* end testmonial */
/* MixItUp */
    $("#container").mixItUp()
/* adjust Shuffle li */ 
    $(".Shuffle li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected")
    })
/* nicescroll */ 
    $("html").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "10px",
        cursorborder: "1px solid #1abc9c "
    })
});
