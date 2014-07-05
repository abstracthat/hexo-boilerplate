// https://github.com/Sam152/Javascript-Equal-Height-Responsive-Rows

(function($) {

  /**
   * Set all elements within the collection to have the same height.
   */
  $.fn.equalHeight = function(){
    var heights = [];
    $.each(this, function(i, element){
      var $element = $(element);
      var element_height = $element.height();
      heights.push(element_height);
    });
    this.height(Math.max.apply(window, heights));
    return this;
  };

  /**
   * Create a grid of equal height elements.
   */
  $.fn.equalHeightGrid = function(){
    var $tiles = this;
    $tiles.css('height', 'auto');

    var prev_elem_offset = null,
        elem_offset = null,
        $row = null;

    $tiles.each(function(index) {
        elem_offset = $(this).offset().top;
        if (prev_elem_offset === null || Math.abs(elem_offset - prev_elem_offset) > 1) {
            if ($row && $row.length) {
                $row.equalHeight();
            }
            $row = $(this);
        } else {
            $row = $row.add(this);
        }
        prev_elem_offset = elem_offset;
    });
    if ($row && $row.length)
      $row.equalHeight();

    return this;
  };


  /**
   * Ensure equal heights now, on ready, load and resize.
   */
  $.fn.responsiveEqualHeightGrid = function() {
    var _this = this;
    function syncHeights() {
      _this.equalHeightGrid();
    }
    $(window).bind('resize load', syncHeights);
    syncHeights();
    return this;
  };

})(jQuery);