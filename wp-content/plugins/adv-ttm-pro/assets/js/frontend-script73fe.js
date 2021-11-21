function ttm_fadeSlider(interval, id) {
    var slides,
    	cnt,
    	amount,
    	i;
    function run() {
        // hiding previous image and showing next
        jQuery(slides[i]).fadeOut('slow', function () {
            // Animation complete.
            i++;
            if (i >= amount) i = 0;
            jQuery(slides[i]).fadeIn('slow');

            // updating counter
            cnt.text(i + 1 + ' / ' + amount);
        });
        // loop
       	setTimeout(run, interval);
    }
    //slides = $('.testimonials > li');
    slides = jQuery('#' + id + ' .testimonials > li');
    cnt = jQuery('#counter');
    amount = slides.length;
    i = 0;
    // updating counter
    cnt.text(i + 1 + ' / ' + amount);
    if (amount > 1) setTimeout(run, interval);
}
    
jQuery(document).ready(function ($) {
     var ratingscolor = iva_ttm_panel.ratings_color;
    jQuery('#widget_client_image_option').change(function(){
        if (jQuery("#widget_client_image_option").prop("checked")) {
            jQuery(".widget_iva_client_photo").show();
        }else{          
            jQuery(".widget_iva_client_photo").hide();
        }
    }).change();

    jQuery('#form_client_image_option').change(function(){
        if (jQuery("#form_client_image_option").prop("checked")) {
            jQuery(".iva_client_photo").show();
        }else{
            jQuery(".iva_client_photo").hide();
        }
    }).change();

    jQuery("#cimage_option").change(function () {
        var selected_dropcap = jQuery("#cimage_option option:selected").val();        
        if(selected_dropcap === 'gravatar') {
            jQuery(".iva_gemail").show();
            jQuery(".iva_cphoto").hide();
        }
        if(selected_dropcap === 'customimage') {     
            jQuery(".iva_cphoto").show();
            jQuery(".iva_gemail").hide();
        }               
    }).change();

     // Select Dropdown for ratings format
    jQuery("#client_ratings_format").change(function () {
        var selected_dropcap = jQuery("#client_ratings_format option:selected").val();        
        if(selected_dropcap === 'ratings') {
            jQuery(".iva_client_ratings").show();
            jQuery(".iva_client_custom_ratings").hide();
        }
        if(selected_dropcap === 'custom') {     
            jQuery(".iva_client_custom_ratings").show();
            jQuery(".iva_client_ratings").hide();
        }               
    }).change();

    // Star Ratings
    $('.iva_ttm_wg_form .at-ttm-ratings-ch a, .iva_ttm_sh_form .at-ttm-ratings-ch a').hover(
        // Handles the mouseover
        function() {
            $(this).prevAll().andSelf().addClass('ratings_over');
        },
        // Handles the mouseout
        function() {
            $(this).prevAll().andSelf().removeClass('ratings_over');
        }
    );
    function set_votes(widget) {
        var color = iva_ttm_panel.ratings_color;
        jQuery('.star_' + widget).prevAll().andSelf().addClass('rated').css( "color", color );
    }
    $('.iva_ttm_wg_form .at-ttm-ratings-ch a').bind('click', function() {
        var color = iva_ttm_panel.ratings_color;
        var star = this;
        $(star).prevAll().removeClass('ratings_over');
        $(star).prevAll().andSelf().addClass('ratings_over');
        $(star).nextAll().removeClass('rated');
        $('.iva_ttm_wg_form #client_ratings').val( jQuery(star).attr('data-rated') );
        var data_id =jQuery(star).attr('data-rated');
        jQuery('.iva_ttm_wg_form .star_' + data_id).prevAll().andSelf().addClass('rated').css( "color", color ); 
    }); 
    $('.iva_ttm_sh_form .at-ttm-ratings-ch a').bind('click', function() {
        var color = iva_ttm_panel.ratings_color;
        var star = this;
        $(star).prevAll().removeClass('ratings_over');
        $(star).prevAll().andSelf().addClass('ratings_over');
        $(star).nextAll().removeClass('rated');
        $('.iva_ttm_sh_form #client_ratings').val( jQuery(star).attr('data-rated') );
        var data_id =jQuery(star).attr('data-rated');
        jQuery('.iva_ttm_sh_form .star_' + data_id).prevAll().andSelf().addClass('rated').css( "color", color );  
    }); 
    jQuery('.at-ttm-ratings').each(function(i) {
        var ratingscolor = iva_ttm_panel.ratings_color;
        $(this).nextAll().removeClass('rated');
        $(this).prevAll().removeClass('rated'); 
        var data_count = $(this).attr('data-rated');
        $(this).find('.star_' + data_count).prevAll().andSelf().addClass('rated').css( "color", ratingscolor );
    });
});