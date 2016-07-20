'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*
Name: Number to words
Description: Returns an English rendering of a numerical input between 0 and 1000
*/

var numberToWords = function numberToWords(num) {
	'use strict';

	if (!num || !Number.isSafeInteger(num) || num <= 0 || num > 1000) return 'zero';

	var digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	var tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	var thosands = ['', 'thousand'];

	//If we wanted to go above one thousand, we can....
	//let thosands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];

	var grp = function grp(num) {
		return ('000' + num).substr(-3);
	};

	var rem = function rem(num) {
		return num.substr(0, num.length - 3);
	};

	var fmt = function fmt(_ref) {
		var _ref2 = _slicedToArray(_ref, 3);

		var h = _ref2[0];
		var t = _ref2[1];
		var o = _ref2[2];

		var hundreds = Number(t) > 0 || Number(o) > 0 ? ' hundred and ' : ' hundred';
		return [Number(h) === 0 ? '' : digits[h] + hundreds, Number(o) === 0 ? tens[t] : tens[t] && tens[t] + '-' || '', digits[t + o] || digits[o]].join('');
	};

	var parseNum = function parseNum(xs) {
		return function (x) {
			return function (g) {
				return x ? [x, g && ' ' + g || '', '', xs].join('') : xs;
			};
		};
	};

	var iter = function iter(str) {
		return function (i) {
			return function (j) {
				return function (k) {
					if (j === '000' && k.length === 0) return str;
					return iter(parseNum(str)(fmt(j))(thosands[i]))(i + 1)(grp(k))(rem(k));
				};
			};
		};
	};

	return iter('')(0)(grp(String(num)))(rem(String(num)));
};

//The console output is for demonstration purposes and would be removed for production.
//console.log('The number is ' + numberToWords(1000));