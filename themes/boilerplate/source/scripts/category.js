/*global $*/

$(function(){

	// Instantiate MixItUp:

	$('#articles').mixItUp({
        selectors: {
            target: '.article'
        }
    });

    $('.filter').on('click', function(event) {
        event.preventDefault();
        $('.filter').removeClass('active');
        $(this).addClass('active');
    });
});
