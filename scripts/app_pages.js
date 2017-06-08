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

$(document).mousemove(function(event) {
	if (window.event.clientY < 100) {
		$("ul.navbar").css("top", "0px");
	} else {
		if (!($(".dropdown:hover").length > 0)) {
			$("ul.navbar").css("top", "-100px");
		}
	}
});

$("ul.navbar").mouseenter(
	function() {
		$(this).css("top", "0px");
	}
);

$(".dropdown").mouseenter(
	function() {
		$("ul.navbar").css("top", "0px");
	}
);