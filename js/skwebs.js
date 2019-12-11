$(document).ready(function () {
		//menu collapse after clicking menu or other bpdy
		$(".pageWrap, .nav-item").click(()=>{
			$("#navContent").collapse('hide');
		})
		
		//set padding top of nav height
		$('.pageWrap').css('padding-top',$('nav').outerHeight());
		//$('section').css('padding-top',$('nav').outerHeight());
		
		
		
		//var scrollLink = $('.scroll');
		var scrollLink = $('.nav-link');
		
		// Smooth scrolling
		var topHeight = 67; //57;
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
				var sectionOffset = $(this.hash).offset().top - (topHeight + 3); //20;
				if ( sectionOffset <= scrollbarLocation ) {
					$(this).parent().addClass('active');
					$(this).parent().siblings().removeClass('active');
				}
			})
		})
		
	
    // init universal parallax
    new universalParallax().init({speed: 6.0});
    /*/initialization
    wow = new WOW({
	    boxClass:     'wow',      // default
	    animateClass: 'animated', // default
	    offset:       120,          // default
	    mobile:       true,       // default
	    live:         true        // default
    })
    //wow.init(); //disabled by comment
    */
    var option={
	    useClassNames: true,
	    initClassName: false,
	    animatedClassName: 'animated'
    };
    AOS.init(option);
    
    
    
    
    /*/way point with class
    $(".vp").waypoint(function(direction){
    //if(direction=='down'){
    $(this[0,'element']).addClass("bg-grad-blue text-light"); //css('background','green');
    //}else{
    //$(this[0,'element']).removeClass("bg-grad-blue text-light") ; //css("background","#f00");
    //}
    },{offset:100 });
    
    //way point with class
    $(".vp").waypoint(function(direction){
    //if(direction=='down'){
    //$(this[0,'element']).addClass("bg-grad-blue text-light"); //css('background','green');
   // }else{
    $(this[0,'element']).removeClass("bg-grad-blue text-light") ; //css("background","#f00");
    //}
    },{offset:100 +"%"});
    */
    
    //
        var windowHeight = $(window).height(),
            gridTop = windowHeight * 0,
            gridBottom = windowHeight * 0.6;
        $(window).on('loaded scroll', function () {
        var nh=$("nav").outerHeight();
            $('.vpt').each(function () {
                var thisTop = $(this).offset().top - $(window).scrollTop();
                var thisBottom = thisTop + $(this).outerHeight();
                //$("#debug").html('gridTop :'+gridTop+'<br>gridBottom : '+gridBottom+'<br>thisTop : '+thisTop+'<br>thisBottom : '+thisBottom+'<br>winHeight : '+$(window).scrollTop()+"<br>navHeight : "+nh);
                if ((thisTop + $(this).height()) < gridBottom) {
                //if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
                    if(!$(this).next().hasClass("bg-grad-blue text-light")){
                    $(this).next().addClass("bg-grad-blue text-light").removeClass("border") ; //css('background', 'red');
                    }//$(this).animate({backgroundImage:"linear-gradient(to right top, #000749 20%, #1CB1FB)"})
                } else {
                    if($(this).next().hasClass("bg-grad-blue text-light")){
	                    $(this).next().removeClass("bg-grad-blue text-light").addClass("border"); //css('background', 'gray');
                    }
                }
            });
        });
    //*/
    
    /*
    $('section').waypoint(function(direction) {
    var activeSection = $(this).next();
    var activeSection = $(this);
    if(direction === 'down'){
    activeSection = $(this).next();
    }
    const navHeight = $('nav').outerHeight();
    activeSection = $(this);
    var sectionId   = this.element.id; //activeSection.attr('id');
    $('ul li').removeClass('active');
    //$('ul li.' + sectionId).addClass('active');
    $('a[href*=\\#'+sectionId+']').parent().addClass('active');
    console.log(activeSection);
    console.log(this.element.id);
    $("#navId").html(sectionId);
    },{offset: $("nav").outerHeight()});*/
    
    /*$('a[href*=\\#]:not([href=\\#])').click(function() {
    $("#navContent").collapse('hide');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    || location.hostname == this.hostname) {
    
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html,body').animate({
    scrollTop: target.offset().top - 56 //(target.height() / 5)
    }, 600);
    
    return false;
    }
    }
    });
    */
    
    }); //jquery ready	
    
