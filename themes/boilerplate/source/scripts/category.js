/*global $*/

$(function(){

    // Instantiate MixItUp:
    $('#articles').mixItUp({
        selectors: {
            target: '.article'
        }
    });

    // Add active class to tag filter buttons
    $('.filter').on('click', function(event) {
        event.preventDefault();
        $('.filter').removeClass('active');
        $(this).addClass('active');
    });

    // Instantiate Equal Height Grid
    // $('.article').responsiveEqualHeightGrid();
});
