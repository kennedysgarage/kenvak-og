//= require plugins

$(document).ready(function(){

	// Contact form
	$("#form .btn").click( function() {
	    $("#form").fadeOut(100);
	    $("#contact-success").delay(100).fadeIn(1000);
	});

});