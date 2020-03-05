$(()=>{
    /*$(".slider__one").slick({
	    autoplay:true,
	    autoplaySpeed:9900,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover: false,
	    pauseOnFocus: false,
	    dots:true,
	    cssEase:'ease-in-out',
	    prevArrow: '<button class="slick__btn slick__prev"></button>',
	    nextArrow: '<button class="slick__btn slick__next"></button>'
    */
    
    
    var time = 10;
    var $bar,
    $slick,
    isPause,
    tick,
    percentTime;
    
    $slick = $('.slider__one');
    $slick.slick({
	    draggable: true,
	    speed:750,
	    adaptiveHeight: false,
	    dots: true,
	    mobileFirst: true,
	    pauseOnDotsHover: true,
	    cssEase:'ease-in-out',
	    prevArrow: '<button class="slick__btn slick__prev"></button>',
	    nextArrow: '<button class="slick__btn slick__next"></button>'
    });
    
    $bar = $('.slider-progress .progress');
    
    $('.slider__one').on({
	    mouseenter: function() {
		    isPause = true;
	    },
	    mouseleave: function() {
		    isPause = false;
	    }
    })
    
    function startProgressbar() {
	    resetProgressbar();
	    percentTime = 0;
	    isPause = false;
	    tick = setInterval(interval, 10);
    }
    
    function interval() {
		if(isPause === false) {
			percentTime += 1 / time; //(time+0.1);
			$bar.css({
				width: percentTime+"%"
			});
			if(percentTime >= 100)
			{
				$slick.slick('slickNext');
				startProgressbar();
			}
		}
    }
    
    
    function resetProgressbar() {
	    $bar.css({
		    width: 0+'%' 
	    });
	    clearTimeout(tick);
    }
    
    startProgressbar();
// ============== //slider__one ================ //
  
  
  
  
  
  
// ============== vebdor__slider ================ //
    
    $(".vendor__credit .vendor__slider").slick({
	    autoplay:true,
	    autoplaySpeed:2000,
	    speed:300,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover: false,
	    pauseOnFocus: false,
	    dots:true,
	    cssEase:'ease-in-out',
	    // prevArrow: false,nextArrow: false,
	    arrows:false,
	    responsive: [
		    {
			    breakpoint: 1400,
			    settings: {
				    slidesToShow: 11
			    }
		    },
		    {
			    breakpoint: 1200,
			    settings: {
				    slidesToShopw: 9
			    }
		    },
		    {
			    breakpoint: 992,
			    settings: {
				    slidesToShow: 7
			    }
		    },
		    {
			    breakpoint: 768, 
			    settings: {
				    slidesToShow: 5
			    }
		    },
		    {
			    breakpoint: 576,
			    settings: {
				    slidesToShow: 3
			    }
		    }
	    ]
    });
    
// ============== // vebdor__slider ================ //
    
    
    
    
    
    
});
