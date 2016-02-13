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