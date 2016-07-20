'use strict'
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let rewire = require('rewire');

import * as Module from '../src/numToWords';

let app = rewire('../src/numToWords');

let numberToWords = app.__get__('numberToWords'); 

describe('Convert numeric values to words', () => {

	describe('Return correct string when passed numeric value', () => {

		it("Should return 'five' if passed 5", function () {
			let result = 'five';
			assert.equal(numberToWords(5), result);
		});

		it("Should return 'fourty-one' if passed 41", function () {
			let result = 'fourty-one';
			assert.equal(numberToWords(41), result);
		});

		it("Should return 'six hundred and fourty-one' if passed 641", function () {
			let result = 'six hundred and fourty-one';
			assert.equal(numberToWords(641), result);
		});

		it("Should return 'one hundred' if passed 100", function () {
			let result = 'one hundred';
			assert.equal(numberToWords(100), result);
		});

		it("Should return 'one thousand' if passed 1000", function () {
			let result = 'one thousand';
			assert.equal(numberToWords(1000), result);
		});
	});


	describe('Return zero when passed incosistent values or 0', () => {

		it("Should return 'zero' if passed 0", function () {
			let result = 'zero';
			assert.equal(numberToWords(0), result);
		});

		it("Should return 'zero' if passed a negative number", function () {
			let result = 'zero';
			assert.equal(numberToWords(-12), result);
		});

		it("Should return 'zero' if passed a float", function () {
			let result = 'zero';
			assert.equal(numberToWords(3.1), result);
		});

		it("Should return 'zero' if passed nothing", function () {
			let result = 'zero';
			assert.equal(numberToWords(), result);
		});
	});

}); 