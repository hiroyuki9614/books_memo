var product = (array) => {
	return array.reduce((accumulator, item) => {
		return accumulator * item;
	}, 1);
};

let arr = [1, 2, 3];
console.log(product(arr));
