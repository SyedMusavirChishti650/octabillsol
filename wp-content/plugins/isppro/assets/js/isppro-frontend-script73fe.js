jQuery(document).ready(function($){
	jQuery("#isppro_form_submit").click(function() {
		email_filter = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		var proceed = true;
		var isppro_name = jQuery( '#isppro_name' ).val();
		var isppro_email = jQuery( '#isppro_email' ).val();
		var isppro_phoneno = jQuery( '#isppro_phoneno' ).val();
		var isppro_zipcode = jQuery( '#isppro_zipcode' ).val();
		var isppro_city = jQuery( '#isppro_city' ).val();
		var isppro_address = jQuery( '#isppro_address' ).val();
		var isppro_business_choice  = jQuery( 'input[name=isppro_business-choice]:radio:checked' ).val();
		var isppro_form_my_action = jQuery( '#isppro_of_nonce_field' ).val();
		if( isppro_name == ""  ) {
			jQuery("#isppro_name").addClass("isppro_error");
			proceed = false;
		}
	   if( isppro_name ) {
		  jQuery("#isppro_name").removeClass("isppro_error");
		   proceed = true;
	   }
	   if( isppro_phoneno == ""  ) {
		   jQuery("#isppro_phoneno").addClass("isppro_error");
		   proceed = false;
	   }
	  if( isppro_phoneno ) {
		 jQuery("#isppro_phoneno").removeClass("isppro_error");
		  proceed = true;
	  }
	   if( isppro_city == ""  ) {
		   jQuery("#isppro_city").addClass("isppro_error");
		   proceed = false;
	   }
	  if( isppro_city ) {
		 jQuery("#isppro_city").removeClass("isppro_error");
		  proceed = true;
	  }
		  // Email
	   if( isppro_email == ""  ){
		   jQuery("#isppro_email").addClass("isppro_error");
		   proceed = false;
	   }else if( isppro_email ) {
		   if( email_filter.test( isppro_email ) ) {
			   jQuery("#isppro_email").removeClass("isppro_error");
			   proceed = true;
		   }else{
			   jQuery("#isppro_email").addClass("isppro_error");
			   proceed = false;
		   }	
	   }
	   // zip Code
	   isppro_zip_val = true;	
	   var reg = /^[ A-Za-z0-9]*$/;
	   if ( isppro_zipcode == '' ){
				jQuery("#isppro_zipcode").addClass("isppro_error");
			   proceed = false;
			   isppro_zip_val = false;
		   }
		   else if ( !reg.test(isppro_zipcode) ){
				jQuery("#isppro_zipcode").addClass("isppro_error");
				   proceed = false;
				   isppro_zip_val = false;
		   }
		   if( isppro_zip_val ) {
			   jQuery("#isppro_zipcode").removeClass("isppro_error");
		   }
		   if( proceed ){
			   isppro_checkavailabilty( isppro_name,isppro_zipcode,isppro_email,isppro_phoneno,isppro_form_my_action,isppro_address,isppro_city,isppro_business_choice );
		   }else{
			   return false;
		   }
	});
	function isppro_checkavailabilty( isppro_name,isppro_zipcode,isppro_email,isppro_phoneno,isppro_form_my_action,isppro_address,isppro_city,isppro_business_choice ) {
		
		jQuery.ajax({
			url: isppro_panel.ajaxurl,
			type: 'post',
			dataType: 'html',
			data: {
				action  	: 'isppro_get_checkavailabilty',
				cat_zip  	: isppro_zipcode,
				isppro_name  : isppro_name,
				isppro_email  : isppro_email,
				isppro_phoneno : isppro_phoneno,
				isppro_zipcode : isppro_zipcode,
				isppro_address : isppro_address,
				isppro_businesschoice : isppro_business_choice,
				isppro_of_nonce_field :isppro_form_my_action
			},
			success: function(response){
				jQuery( '.isppro_availabilty_form .isppro_name').text( isppro_name );
				jQuery( '.isppro_availabilty_form .isppro_email').text( isppro_email );
				jQuery( '.isppro_availabilty_form .isppro_city' ).text( isppro_city );
				jQuery('.isppro_availabilty_form .isppro_address' ).text( isppro_address );
				jQuery('.isppro_availabilty_form .isppro_zipcode' ).text( isppro_zipcode );
				jQuery('.isppro_availabilty_form .isppro_phone' ).text( isppro_phoneno );
				jQuery('.isppro_availabilty_form .isppro_type' ).text( isppro_business_choice );
				jQuery( '#isppro_name_val' ).val( isppro_name);
				jQuery( '#isppro_city_val' ).val( isppro_city );
				jQuery( '#isppro_zipcode_val' ).val( isppro_zipcode );
				jQuery( '#isppro_address_val' ).val( isppro_address );
				jQuery( '#isppro_email_val' ).val( isppro_email );
				jQuery( '#isppro_phoneno_val' ).val( isppro_phoneno );
				jQuery( '#isppro_business-choice_val' ).val( isppro_business_choice );
				jQuery( '#availabilityform' ).hide();
				jQuery( '.intro-text' ).hide();
				jQuery( '.isppro_availabilty_form' ).show(); 
				jQuery( '.isppro_availabilty_form .isppro_availabilty' ).html(response).show();

			}
		});
	}
	
	jQuery( "#isppro_zipcode" ).keyup(function( event ) {
		var isppro_zipcode = jQuery('#isppro_zipcode').val();
		    jQuery("#loader").show();
		jQuery.ajax({
			url: isppro_panel.ajaxurl,
			type: 'post',
			dataType: 'html',
			data: {
				action  	: 'iva_check_isppro_zipcode',
				cat_zip  	: isppro_zipcode,
			},
			success: function(response){
				jQuery('#isppro_form_submit').prop('disabled', false);				
				jQuery('#zipcode_check_status').html(response).show();
				jQuery("#loader").hide();
			}
		});
		event.preventDefault();
	});
	jQuery('#isppro_form_reqsubmit').on('click',function(events){
		var isppro_name = jQuery('#isppro_name_val').val();
		var isppro_email = jQuery('#isppro_email_val').val();
		var isppro_phoneno = jQuery('#isppro_phoneno_val').val();
		var isppro_zipcode = jQuery('#isppro_zipcode_val').val();
		var isppro_city = jQuery('#isppro_city_val').val();
		var isppro_address = jQuery('#isppro_address_val').val();
		var isppro_business_choice_val = jQuery('#isppro_business-choice_val').val();
		var isppro_package_name = jQuery('#isppro_package_name').val();
		var isppro_price_val = jQuery('#isppro_price_val').val();
		
		jQuery.ajax({
			url: isppro_panel.ajaxurl,
			type: 'post',
			dataType: 'html',
			data: {
				action  : 'isppro_booking_request',
				cat_zip  	: isppro_zipcode,
				isppro_name  : isppro_name,
				isppro_email  : isppro_email,
				isppro_phoneno : isppro_phoneno,
				isppro_zipcode : isppro_zipcode,
				isppro_address : isppro_address,
				isppro_package_name : isppro_package_name,
				isppro_business : isppro_business_choice_val,
				isppro_city		: isppro_city,
				isppro_price_val : isppro_price_val,
			},
			success: function(response){
				jQuery('#isppro_booking_success').addClass('success');				
				jQuery('#isppro_booking_success').html(response).show();
				jQuery('#isppro_form_reqsubmit').attr('disabled', true);
			}
		});
	});
});