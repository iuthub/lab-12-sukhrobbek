import 'bootstrap';
import './scss/styles.scss'
import $ from 'jquery';
$(document).ready(function()
{
	$('.header').heigth($(window).height());
	$(".navbar a").click(function(){
		$("body,html").animate({
			 scrollTop: $("#" + $(this).data('value')).offset().top }, 1000)
	})
})