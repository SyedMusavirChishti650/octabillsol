jQuery(document).ready(function($) {
    jQuery('#iva_ttm_wg_submit').click(function(e) {
    	submitid = 'iva_ttm_wg_form';
    	e.preventDefault;
        validateForm(submitid);   

		jQuery('html, body').animate({
			 scrollTop: $("#iva_ttm_wg_form").offset().top - 50
		}, 1000);

    });
	jQuery('#iva_ttm_sh_submit').click(function(e) {
    	submitid = 'iva_ttm_sh_form';
    	e.preventDefault;
        validateForm(submitid);   

		jQuery('html, body').animate({
			 scrollTop: $("#iva_ttm_sh_form").offset().top - 50
		}, 1000);

    });

	function validateForm(submitid) {

        var emailReg     = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
       
        var iva_client_title	= jQuery('#'+submitid+ ' #client_title').val();
        var iva_gravatar_email	= jQuery('#'+submitid+ ' #gravatar_email').val();   
        var iva_client_photo	= jQuery('#'+submitid+ ' #client_photo').val();
        var iva_client_job		= jQuery('#'+submitid+ ' #client_job').val();
        var iva_company_name	= jQuery('#'+submitid+ ' #company_name').val();
        var iva_company_url		= jQuery('#'+submitid+ ' #company_url').val();
		var iva_client_desc		= jQuery('#'+submitid+ ' #client_desc').val();
		var iva_c_result		= jQuery('#'+submitid+ ' #captcha_result').val();
		var iva_c_val			= jQuery('#'+submitid+ ' #captcha_val').val();

		//
        var client_title_req	= jQuery('#'+submitid+ ' #client_title').attr('data-req');
        var gravatar_email_req	= jQuery('#'+submitid+ ' #gravatar_email').attr('data-req');
        var client_photo_req	= jQuery('#'+submitid+ ' #client_photo').attr('data-req');
        var client_job_req		= jQuery('#'+submitid+ ' #client_job').attr('data-req');
        var company_name_req	= jQuery('#'+submitid+ ' #company_name').attr('data-req');
        var company_url_req		= jQuery('#'+submitid+ ' #company_url').attr('data-req');
		var client_desc_req		= jQuery('#'+submitid+ ' #client_desc').attr('data-req');
		var c_result_req		= jQuery('#'+submitid+ ' #captcha_result').attr('data-req');
		var c_val_req			= jQuery('#'+submitid+ ' #captcha_val').attr('data-req');
		
		
		email_filter = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		var proceed = true;
		
		// Client Title
		if( iva_client_title == "" && client_title_req === 'true' ) {
			jQuery('#'+submitid+ " #client_title").addClass("ttm_error");
            proceed = false;
        }
        if( iva_client_title ) {
		 	jQuery('#'+submitid+ " #client_title").removeClass("ttm_error");
			proceed = true;
		}	 
		// Email
		if( iva_gravatar_email == "" && gravatar_email_req == 'true' ){
			jQuery('#'+submitid+ " #gravatar_email").addClass("ttm_error");
			proceed = false;
		}else if( iva_gravatar_email ) {
			if( emailReg.test( iva_gravatar_email ) ) {
				jQuery('#'+submitid+ " #gravatar_email").removeClass("ttm_error");
				proceed = true;
			}else{
				jQuery('#'+submitid+ " #gravatar_email").addClass("ttm_error");
				proceed = false;
			}	
        }
		// Client Job
		if( iva_client_job == "" && client_job_req == 'true' ) {
			jQuery('#'+submitid+ " #client_job").addClass("ttm_error");
            proceed = false;
        }
        if( iva_client_job ) {
		 	jQuery('#'+submitid+ " #client_job").removeClass("ttm_error");
			proceed = true;
		}				
		// Company Name
		if( iva_company_name == "" && company_name_req == 'true' ) {
			jQuery('#'+submitid+ " #company_name").addClass("ttm_error");
			 proceed = false;
        } 
		if( iva_company_name ) {
            jQuery('#'+submitid+ " #company_name").removeClass("ttm_error");
			 proceed = true;
        } 
		// Company Website
		if( iva_company_url == "" && company_url_req == 'true' ) {
			jQuery('#'+submitid+ " #company_url").addClass("ttm_error");
			 proceed = false;
        } 
		if( iva_company_url ) {
            jQuery('#'+submitid+ " #company_url").removeClass("ttm_error");
			 proceed = true;
        } 		
		// Client Description
		if( iva_client_desc == "" && client_desc_req == 'true' ) {
			jQuery('#'+submitid+ " #client_desc").addClass("ttm_error");
			 proceed = false;
        } 
		if( iva_client_desc ) {
            jQuery('#'+submitid+ " #client_desc").removeClass("ttm_error");
			 proceed = true;
        }
        // Upload Photo
		if(jQuery('#'+submitid+ " #form_client_image_option").is(':checked') == true){
			if( iva_client_photo == "" && client_photo_req == 'true' ) {
				jQuery('#'+submitid+ " #client_photo").addClass("ttm_error");
	            proceed = false;
	        }
	         if( iva_client_photo ) {
			 	jQuery('#'+submitid+ " #client_photo").removeClass("ttm_error");
				proceed = true;
			}
		}
		//Captcha
		if( iva_c_result == "" && c_result_req == 'true' ) {
			jQuery('#'+submitid+ " #captcha_result").addClass("ttm_error");
			 proceed = false;
        } else {
            jQuery('#'+submitid+ " #captcha_result").removeClass("ttm_error");
			 proceed = true;
        }
		if( iva_c_result === iva_c_val ) {
			jQuery('#'+submitid+ " #captcha_result").removeClass("ttm_error");
			proceed = true;
		} else {
			jQuery('#'+submitid+ " #captcha_result").addClass("ttm_error");
			proceed = false;
		}

		// if no error proceed
        if( proceed ) {
            iva_ttm_insert(submitid);
        }
    }
   
	function iva_ttm_insert(submitid) {
		var fd 	= new FormData();
		if(jQuery('#'+submitid+ " #form_client_image_option").is(':checked') == false){
			var photo_id  = '#' + submitid + "  #client_photo";
			if(typeof(jQuery(photo_id)[0]) != "undefined" && jQuery(photo_id)[0] !== null) {
				var individual_file = jQuery(photo_id)[0].files[0];
	
				fd.append('client_photo', individual_file);
			}
		}
		if(jQuery('#'+submitid+ " #widget_client_image_option").is(':checked') == false){
			var photo_id  = '#' + submitid + "  #client_photo";
			if(typeof(jQuery(photo_id)[0]) != "undefined" && jQuery(photo_id)[0] !== null) {
				var individual_file = jQuery(photo_id)[0].files[0];
				fd.append('client_photo', individual_file);
			}
		}

		var form_data  = jQuery('#' + submitid ).serialize();
		var form_nonce = jQuery('#iva-ttm-form').val();

		fd.append('data', form_data ); 
		fd.append('form_nonce', form_nonce);
		fd.append('action', 'iva_ttm_form_insert'); 

		 jQuery.ajax({
        	type: 'POST',
			url: iva_ttm_panel.ajaxurl,
			data: fd,
			contentType: false,
			processData: false,
            success: function( response ) {
                jQuery('.' +submitid+ ' #iva_ttm_formstatus').html(response);
                jQuery('.' +submitid+ ' #iva_ttm_wg_formstatus').html(response);
				// window.location.href = '#iva_ttm_form status';
				//document.iva_ttm_form.reset();
				jQuery('#iva_ttm_sh_form')[0].reset();
				jQuery('#iva_ttm_wg_form')[0].reset();				
           }
        });
    }
});
