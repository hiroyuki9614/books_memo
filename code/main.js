function add(a, b) {
	return Number((Number(a) + Number(b)).toFixed(2));
}

$(function () {
	$('button').click(function () {
		$('#result').text(add($('#a').val(), $('#b').val()));
	});
});
