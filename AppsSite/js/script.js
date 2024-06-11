$(function(){
    // Type Js Start 
	$(".typed").typed({
		strings: ["We are a team of professionals.", "We are a team of professionals.", "We are a team of professionals."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    // Type Js End 
    // Mixitup Work Js Start 
    var containerEl = document.querySelector('.works-gal');

            var mixer = mixitup('.workes_img');
    // Mixitup Work Js ENd 

	// Counter Js Start 
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	// Counter Js End 
	// Team Slick Slider Start
	$('.Team_slaider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: none,
	  });
	// Team Slick Slider End
	
});
