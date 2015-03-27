(function($) {
	var sid=null;
	$.fn.fixedZoom = function() {
		var _this = this;
		function run(_this) {
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
		}
		$(window).resize(function() {
			sid !== null && clearTimeOut(sid);
			sid = setTimeout(run,200);
		});
		return this;
	};
})(jQuery);