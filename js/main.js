$(function(){
	$('.works-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
	    startPosition: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$('.contributor-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots: false,
	    navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
	    // startPosition: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	$(".works-wrap").css({
        display: "none",
        opacity: "1"
    });
    $(".works-wrap img").css({
        opacity: "1"
    });
    $("#all").css({
        display: "flex"
    });
    $(".work-tabs a").click(function(e) {
        e.preventDefault(),
            $(".work-tabs .active").removeClass("active"),
            $(this).addClass("active");

        var i = $(this).attr("href");
        $(".works-wrap").not(i).css({
            display: "none"
        }),
            $(i).fadeIn()
    })
});