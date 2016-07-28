// JavaScript Document
$(document).ready(function() {
	
	$('#register').submit(function(){
		
	 $.cookie('fullname', $("#name").val(), { expires: 365 }); 
	 $.cookie('email', $("#email").val(), { expires: 365 });
	 $.cookie('address', $("#address").val(), { expires: 365 });
	 $.cookie('phone', $("#phone").val(), { expires: 365 });
	 $.cookie('zipcode', $("#zipcode").val(), { expires: 365 });
	 $.cookie('country', $("#country").val(), { expires: 365 });
     
});
 
}); // end ready
