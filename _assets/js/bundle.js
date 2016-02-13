$("#contact-form").validate({
	submitHandler: function(form) {
		$.ajax({
			url: "//formspree.io/hello@roguedesign.co", 
			method: "POST",
			data: {
				name: $(form).find("input[name='name']").val(),
				_replyto: $(form).find("input[name='_replyto']").val(),
				url: $(form).find("input[name='url']").val(),
				message: $(form).find("textarea[name='message']").val()
			},
			dataType: "json",
			success: function() {
				$("#submit-success").fadeIn();
				$("#contact-form").fadeOut();
			},
			error: function() {
				$("#submit-errors").fadeIn();        
			}
		});
	}
});
$(function() {
	var menu = $(".nav-mobile");
	var menuList = $(".nav-mobile-list");
	$(".menu-icon").click(function(e) {
		menu.toggleClass("menuOpen");
		$('.container').toggleClass("menuTransition");
		menuList.toggleClass("fadeInLeft");
		e.preventDefault();
	});
});
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay:true,
		autoHeight: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});
$("#contact-form").validate({
	submitHandler: function(form) {
		$.ajax({
			url: "//formspree.io/hello@roguedesign.co", 
			method: "POST",
			data: {
				name: $(form).find("input[name='name']").val(),
				_replyto: $(form).find("input[name='_replyto']").val(),
				url: $(form).find("input[name='url']").val(),
				message: $(form).find("textarea[name='message']").val()
			},
			dataType: "json",
			success: function() {
				$("#submit-success").fadeIn();
				$("#contact-form").fadeOut();
			},
			error: function() {
				$("#submit-errors").fadeIn();        
			}
		});
	}
});
$(function() {
	var menu = $(".nav-mobile");
	var menuList = $(".nav-mobile-list");
	$(".menu-icon").click(function(e) {
		menu.toggleClass("menuOpen");
		$('.container').toggleClass("menuTransition");
		menuList.toggleClass("fadeInLeft");
		e.preventDefault();
	});
});
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay:true,
		autoHeight: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});
$("#contact-form").validate({
	submitHandler: function(form) {
		$.ajax({
			url: "//formspree.io/hello@roguedesign.co", 
			method: "POST",
			data: {
				name: $(form).find("input[name='name']").val(),
				_replyto: $(form).find("input[name='_replyto']").val(),
				url: $(form).find("input[name='url']").val(),
				message: $(form).find("textarea[name='message']").val()
			},
			dataType: "json",
			success: function() {
				$("#submit-success").fadeIn();
				$("#contact-form").fadeOut();
			},
			error: function() {
				$("#submit-errors").fadeIn();        
			}
		});
	}
});
$(function() {
	var menu = $(".nav-mobile");
	var menuList = $(".nav-mobile-list");
	$(".menu-icon").click(function(e) {
		menu.toggleClass("menuOpen");
		$('.container').toggleClass("menuTransition");
		menuList.toggleClass("fadeInLeft");
		e.preventDefault();
	});
});
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay:true,
		autoHeight: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});
$("#contact-form").validate({
	submitHandler: function(form) {
		$.ajax({
			url: "//formspree.io/hello@roguedesign.co", 
			method: "POST",
			data: {
				name: $(form).find("input[name='name']").val(),
				_replyto: $(form).find("input[name='_replyto']").val(),
				url: $(form).find("input[name='url']").val(),
				message: $(form).find("textarea[name='message']").val()
			},
			dataType: "json",
			success: function() {
				$("#submit-success").fadeIn();
				$("#contact-form").fadeOut();
			},
			error: function() {
				$("#submit-errors").fadeIn();        
			}
		});
	}
});
$(function() {
	var menu = $(".nav-mobile");
	var menuList = $(".nav-mobile-list");
	$(".menu-icon").click(function(e) {
		menu.toggleClass("menuOpen");
		$('.container').toggleClass("menuTransition");
		menuList.toggleClass("fadeInLeft");
		e.preventDefault();
	});
});
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay:true,
		autoHeight: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});
$("#contact-form").validate({
	submitHandler: function(form) {
		$.ajax({
			url: "//formspree.io/hello@roguedesign.co", 
			method: "POST",
			data: {
				name: $(form).find("input[name='name']").val(),
				_replyto: $(form).find("input[name='_replyto']").val(),
				url: $(form).find("input[name='url']").val(),
				message: $(form).find("textarea[name='message']").val()
			},
			dataType: "json",
			success: function() {
				$("#submit-success").fadeIn();
				$("#contact-form").fadeOut();
			},
			error: function() {
				$("#submit-errors").fadeIn();        
			}
		});
	}
});
$(function() {
	var menu = $(".nav-mobile");
	var menuList = $(".nav-mobile-list");
	$(".menu-icon").click(function(e) {
		menu.toggleClass("menuOpen");
		$('.container').toggleClass("menuTransition");
		menuList.toggleClass("fadeInLeft");
		e.preventDefault();
	});
});
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay:true,
		autoHeight: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});
$("#contact-form").validate({
	submitHandler: function(form) {
		$.ajax({
			url: "//formspree.io/hello@roguedesign.co", 
			method: "POST",
			data: {
				name: $(form).find("input[name='name']").val(),
				_replyto: $(form).find("input[name='_replyto']").val(),
				url: $(form).find("input[name='url']").val(),
				message: $(form).find("textarea[name='message']").val()
			},
			dataType: "json",
			success: function() {
				$("#submit-success").fadeIn();
				$("#contact-form").fadeOut();
			},
			error: function() {
				$("#submit-errors").fadeIn();        
			}
		});
	}
});
$(function() {
	var menu = $(".nav-mobile");
	var menuList = $(".nav-mobile-list");
	$(".menu-icon").click(function(e) {
		menu.toggleClass("menuOpen");
		$('.container').toggleClass("menuTransition");
		menuList.toggleClass("fadeInLeft");
		e.preventDefault();
	});
});
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay:true,
		autoHeight: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});
$("#contact-form").validate({
	submitHandler: function(form) {
		$.ajax({
			url: "//formspree.io/hello@roguedesign.co", 
			method: "POST",
			data: {
				name: $(form).find("input[name='name']").val(),
				_replyto: $(form).find("input[name='_replyto']").val(),
				url: $(form).find("input[name='url']").val(),
				message: $(form).find("textarea[name='message']").val()
			},
			dataType: "json",
			success: function() {
				$("#submit-success").fadeIn();
				$("#contact-form").fadeOut();
			},
			error: function() {
				$("#submit-errors").fadeIn();        
			}
		});
	}
});
$(function() {
	var menu = $(".nav-mobile");
	var menuList = $(".nav-mobile-list");
	$(".menu-icon").click(function(e) {
		menu.toggleClass("menuOpen");
		$('.container').toggleClass("menuTransition");
		menuList.toggleClass("fadeInLeft");
		e.preventDefault();
	});
});
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay:true,
		autoHeight: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});
$("#contact-form").validate({
	submitHandler: function(form) {
		$.ajax({
			url: "//formspree.io/hello@roguedesign.co", 
			method: "POST",
			data: {
				name: $(form).find("input[name='name']").val(),
				_replyto: $(form).find("input[name='_replyto']").val(),
				url: $(form).find("input[name='url']").val(),
				message: $(form).find("textarea[name='message']").val()
			},
			dataType: "json",
			success: function() {
				$("#submit-success").fadeIn();
				$("#contact-form").fadeOut();
			},
			error: function() {
				$("#submit-errors").fadeIn();        
			}
		});
	}
});
$(function() {
	var menu = $(".nav-mobile");
	var menuList = $(".nav-mobile-list");
	$(".menu-icon").click(function(e) {
		menu.toggleClass("menuOpen");
		$('.container').toggleClass("menuTransition");
		menuList.toggleClass("fadeInLeft");
		e.preventDefault();
	});
});
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay:true,
		autoHeight: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});