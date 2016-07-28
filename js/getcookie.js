// JavaScript Document
$(document).ready(function() {
var fullname = $.cookie('fullname');
var email = $.cookie('email');
var address = $.cookie('address');
var phone = $.cookie('phone');
var zipcode = $.cookie('zipcode');
var country = $.cookie('country');

document.getElementById("fullname").innerHTML ="<h2>"+fullname+"</h2>";
document.getElementById("email").innerHTML = "<h4>"+email+"</h4>";
document.getElementById("address").innerHTML = "<h4>"+address+"</h4>";
document.getElementById("phone").innerHTML = "<h4>"+phone+"</h4>";
document.getElementById("zipcode").innerHTML = "<h4>"+zipcode+"</h4>";
document.getElementById("country").innerHTML = "<h4>"+country+"</h4>";



}); // end ready

