// smooth scrolling
$(document).ready(function() {
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate(
				{scrollTop: $(hash).offset().top},
				1000, function() {
					// Add htmlash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;}
			);
		} // End if
	});
})



// navbar
$(function(){
	$("#header").load("navbar_main.html"); 
});

// hide navbar by moving out of window 100px
function hideNavbar() {
	$("ul.navbar").css("top", "-100px");
}

// track vertical mouse position globally
// default=500px, roughly middle of the screen
var currentMousePosY = 500;

// based on mouse position, play around with navbar
$(document).mousemove(function(event) {
	// update mouse position
	currentMousePosY = window.event.clientY;

	// if within top 100px
	if (currentMousePosY <= 100) {
		// show navbar
		$("ul.navbar").css("top", "0px");
	} else { // if not in the top region
		// AND not over dropdown contents
		if (!($(".dropdown:hover").length > 0)) {
			// give 500ms delay
			setTimeout(function() {
				// after 500ms, mouse position is updated (because it is global)
				if (currentMousePosY > 100) {
					// if the last updated mouse position is not in top 100px
					hideNavbar();
				}
			}, 500);
		}
	}
});

$(".dropdown").mouseenter(
	function() {
		$("ul.navbar").css("top", "0px");
	}
);

$(document).ready(
	function() {
		setTimeout(hideNavbar, 500);
	}
);