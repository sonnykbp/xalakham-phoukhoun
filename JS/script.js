// alert("this works");

$(document).ready(function(){
	$('#hamburger_nav').hide();
    $("#sticker").sticky({topSpacing:0});

	$('#hamburger').click(function(event) {
		event.preventDefault();
		$('#hamburger_nav').slideToggle();
	});

	$('.a1, .a2, .a3, .a4').hide();

	$('.q1').click(function(event) {
		$('.a1').slideToggle();
	});

	$('.q2').click(function(event) {
		$('.a2').slideToggle();
	});	

	$('.q3').click(function(event) {
		$('.a3').slideToggle();
	});

	$('.q4').click(function(event) {
		$('.a4').slideToggle();
	});

  });