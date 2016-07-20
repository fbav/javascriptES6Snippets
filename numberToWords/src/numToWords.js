/*
Name: Number to words
Description: Returns an English rendering of a numerical input between 0 and 1000
*/

let numberToWords = num => {
	'use strict';

	if (!num || !Number.isSafeInteger(num) || num <= 0 || num > 1000) return 'zero';

	let digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	let tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	let thosands = ['', 'thousand'];

	//If we wanted to go above one thousand, we can....
	//let thosands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];

	let grp = num => ('000' + num).substr(-3);

	let rem = num => num.substr(0, num.length - 3);

	let fmt = ([h, t, o]) => {
		let hundreds = (Number(t) > 0 || Number(o) > 0) ? ' hundred and ' : ' hundred';
		return [
      Number(h) === 0 ? '' : digits[h] + hundreds,
      Number(o) === 0 ? tens[t] : tens[t] && tens[t] + '-' || '',
      digits[t + o] || digits[o]
    ].join('');
	};


	let parseNum = xs => x => g => x ? [x, g && ' ' + g || '', '', xs].join('') : xs;

	let iter = str => i => j => k => {
		if (j === '000' && k.length === 0) return str;
		return iter(parseNum(str)(fmt(j))(thosands[i]))(i + 1)(grp(k))(rem(k));
	};

	return iter('')(0)(grp(String(num)))(rem(String(num)));
};

//The console output is for demonstration purposes and would be removed for production.
//console.log('The number is ' + numberToWords(1000));