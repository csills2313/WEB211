$(document).ready(function() {
	$("#name").focus();
	$("#register").validate( {
		rules:{
			
			name: {
				required: true,
				
			},
			password: {
				required: true,
				
			},
			address: {
				required: true
			},
			email: {
				required: true,
				email:true,
			},
			phone: {
				required: true,
				phoneUS: true,
			},
			zipcode: {
				required: true,							
			},
			country: {
				required: true,
				
			},
			
		}
	
	});

}); // end ready
