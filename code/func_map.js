// succ 関数を定義
const succ = (x) => x + 1;
var map = (transform) => {
	return (array) => {
		return array.reduce((accumulator, item) => {
			return accumulator.concat(transform(item));
		}, []); // 初期値として空の配列を設定する
	};
};

console.log(map(succ)([1, 3, 5]));

// a. map(succ) が呼び出され、succ 関数を引数として受け取った新しい関数が返されます。
// b. この返された関数に [1, 3, 5] が渡されます。
// c. 配列 [1, 3, 5] の各要素に対して：

// 1 に succ が適用され、2 になります。
// 3 に succ が適用され、4 になります。
// 5 に succ が適用され、6 になります。

// d. これらの結果が新しい配列 [2, 4, 6] にまとめられます。
// e. 最終的に [2, 4, 6] が console.log によって出力されます。

// succ 関数を配列の各要素に適用するには、以下のような方法を使用する必要があります：

// Array.map() メソッドを使用する:
// javascriptCopy[1, 3, 5].map(succ)

// あるいは、前述の map 関数を使用する:
// javascriptCopymap(succ)([1, 3, 5])
