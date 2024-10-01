mocha.setup('bdd');
window.onload = function () {
	mocha.run();
};

describe('add(a, b)', function () {
	describe('add(1, 2)', function () {
		it('1+2の足し算の結果3', function () {
			var test = add(1, 2);
			return expect(test).to.be(3);
		});
	});
	describe('add(0.1, 0.2)', function () {
		it('0.1+0.2の足し算の結果0.3', function () {
			var test = add(0.1, 0.2);
			return expect(test).to.be(0.3);
		});
	});
});

describe('Function tests', function () {
	describe('succ', function () {
		it('should increment the input by 1', function () {
			expect(succ(1)).to.equal(2);
			expect(succ(0)).to.equal(1);
			expect(succ(-1)).to.equal(0);
		});
	});

	describe('map', function () {
		it('should apply the transform function to each element of the array', function () {
			const doubleMap = map((x) => x * 2);
			expect(doubleMap([1, 2, 3])).to.eql([2, 4, 6]);
		});

		it('should work with the succ function', function () {
			const succMap = map(succ);
			expect(succMap([1, 2, 3])).to.eql([2, 3, 4]);
		});

		it('should return an empty array when given an empty array', function () {
			const doubleMap = map((x) => x * 2);
			expect(doubleMap([])).to.eql([]);
		});
	});
});
