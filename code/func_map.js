// succ 関数を定義
const succ = (x) => x + 1;

var map = (transform) => {
	return (array) => {
		return array.reduce((accumulator, item) => {
			return accumulator.concat(transform(item));
		}, []); // 初期値として空の配列を設定する
	};
};
