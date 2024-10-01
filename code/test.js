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
