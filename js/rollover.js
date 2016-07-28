// JavaScript Document
$(document).ready(function() {
$("img.rollover").hover(function() {
		$(this).attr("src","images/rollover1.jpg");
			}, function() {
		$(this).attr("src","images/flowers/xfs_149x137_s80_columbine_flower_plant.jpg");
	});
	$("img.rollover2").hover(function() {
		$(this).attr("src","images/rollover2.jpg");
			}, function() {
		$(this).attr("src","images/flowers/xfs_149x137_s80_christmas_flower.jpg");
	});
	$("img.rollover3").hover(function() {
		$(this).attr("src","images/rollover1.jpg");
			}, function() {
		$(this).attr("src","images/vegetables/xfs_150x150_s80_bell_pepper_plant_pepper_shrub_paprika.jpg");
	});
	$("img.rollover4").hover(function() {
		$(this).attr("src","images/rollover2.jpg");
			}, function() {
		$(this).attr("src","images/vegetables/xfs_150x150_s80_black_zucchinin.jpg");
	});
}); 

