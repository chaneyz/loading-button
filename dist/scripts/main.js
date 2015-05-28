$(document).ready(function () {
	var $btn = $('#button')

	$btn.on('click', loadBtn);

	function loadBtn(e) {
		$btn.html('Loading...');
		$btn.css('color', '#cccccc');

		setTimeout(submitBtn, 2000);
	}
	function submitBtn(e) {
		$btn.html('Submit');
		$btn.css('color', '#ffffff');
	}

});