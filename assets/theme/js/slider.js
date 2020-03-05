$(()=>{
    $(".slider__one").slick({
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
    });
    
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
    slidesToShow: 7
    }
    },
    {
    breakpoint: 1200,
    settings: {
    slidesToShopw: 6
    }
    },
    {
    breakpoint: 1000,
    settings: {
    slidesToShow: 7
    }
    },
    {
    breakpoint: 800,
    settings: {
    slidesToShow: 4
    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 3
    }
    },
    {
    breakpoint: 400,
    settings: {
    slidesToShow: 3
    }
    },
    {
    breakpoint: 200,
    settings: {
    slidesToShow: 1
    }
    }
    ]
    });
    
    
    
    
    
    
    
});