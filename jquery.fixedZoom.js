(function($) {
	var _object = null;
	$(window).resize(function() {
		var _size;
		if (!screen.deviceXDPI && !screen.logicalXDPI) {
			_size = window.devicePixelRatio;
		} else {
			_size = screen.deviceXDPI / screen.logicalXDPI;
		}
		if (_object !== null) {
			_object.each(function() {
				$(this).css({
					"zoom": 1 / _size,
					"-moz-transform": "scale(" + 1 / _size + ")"
				});
			});
		}
	});
	$.fn.fixedZoom = function() {
		if (_object === null ) {
			_object = this;
		} else {
			_object.add(this)
		}
		return this;
	};
})(jQuery);