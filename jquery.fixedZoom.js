(function($) {
	$.fn.fixedZoom = function() {
		var _this = this;
		$(window).resize(function() {
			var _size;
			if (!screen.deviceXDPI && !screen.logicalXDPI) {
				_size = window.devicePixelRatio;
			} else {
				_size = screen.deviceXDPI / screen.logicalXDPI;
			}
			_this.each(function() {
				$(this).css({
					"zoom": 1 / _size,
					"-moz-transform": "scale(" + 1 / _size + ")"
				});
			});
		});
		return this;
	};
})(jQuery);