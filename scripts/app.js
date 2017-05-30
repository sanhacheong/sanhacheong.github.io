// smooth scrolling
$(document).ready(function(){
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
	  $('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 1000, function(){
   
		// Add hash (#) to URL when done scrolling (default click behavior)
		// window.location.hash = hash;
	  });
	} // End if
  });
});
	


// navbar
$(window).scroll(function() {
	if ($(window).scrollTop() > $(window).height()*0.75) {
		$("ul.navbar").css("top", "0px");
	} else {
		$("ul.navbar").css("top", "-100px");
	}
});


$(document).ready(function() {
	$(".top-region").hover(
		function() {
			$("ul.navbar").css("top", "0px");
		}, function() {
			$("ul.navbar").css("top", "-100px");
		}
	);

	$("ul.navbar").mouseenter(
		function() {
			$(this).css("top", "0px");
		}
	);
});