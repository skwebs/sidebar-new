$(document).ready(function () {
		//menu collapse after clicking menu or other bpdy
		$(".pageWrap, .nav-item").click(()=>{
			$("#navContent").collapse('hide');
		})
		
		//set padding top of nav height
		$('.pageWrap').css('padding-top',$('nav').outerHeight());
		
		
		
		//var scrollLink = $('.scroll');
		var scrollLink = $('.nav-link');
		
		// Smooth scrolling
		var topHeight = 57; //57;
		scrollLink.click(function(e) {
		e.preventDefault();
			$('body,html').animate({
				scrollTop: ($(this.hash).offset().top - topHeight //$("nav").outerHeight()
				)
			}, 1000 );
		});
		
		// Active link switching
		$(window).scroll(function() {
			var scrollbarLocation = $(this).scrollTop();
			scrollLink.each(function() {
			
			if($(this.hash).length){
				var sectionOffset = $(this.hash).offset().top - (topHeight + 3); //20;
			}
				if ( sectionOffset <= scrollbarLocation ) {
					$(this).parent().addClass('active');
					$(this).parent().siblings().removeClass('active');
				}
			})
		})
		
	
    var option={
	    useClassNames: true,
	    initClassName: false,
	    animatedClassName: 'animated'
    };
    AOS.init(option);
    
    
    
    
    }); //jquery ready	
    