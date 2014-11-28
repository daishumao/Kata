define(
	[
	],
	function() {
		var exports = {};
		//递归
		exports.chop = function(target, search_array, start) {
			var length = search_array.length;
			if (length == 0) {
				return -1;
			}
			var mid = search_array[Math.floor(length/2)];
			var start = start | 0;
			if (mid == target) {
				return (start + Math.floor(length/2));
			}
			if (length != 1) {
				if (mid > target) {
					return arguments.callee(target, search_array.slice(0, Math.floor(length/2)), start);
				} else {
					return arguments.callee(target, search_array.slice(Math.floor(length/2) + 1, length), start + Math.floor(length/2) + 1);
				}
			} else {
				return -1;
			}
		};

		//循环
		exports.chop02 = function(target, search_array) {
			var length = search_array.length;
			if (length == 0) {
				return -1;
			}
			var mid = search_array[Math.floor(length/2)];
			var start = 0;
			while (length != 0) {
				if (mid == search_array[Math.floor(length/2)]) {

				}
			}
			return -1;
			if (mid == target) {
				return (start + Math.floor(length/2));
			}
			if (length != 1) {
				if (mid > target) {
					return arguments.callee(target, search_array.slice(0, Math.floor(length/2)), start);
				} else {
					return arguments.callee(target, search_array.slice(Math.floor(length/2) + 1, length), start + Math.floor(length/2) + 1);
				}
			} else {
				return -1;
			}
		};


		return exports;
	}
);
