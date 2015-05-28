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





// $btn = $('#btn');
// 	txtVal = $btn.val();

// 	$btn.on('click', load);

// 	function load(e){

		
// 		$btn.html('loading...') 
// 		$btn.css('color','#cccccc');

// 		setTimeout(changeBack, 4000);
// 	}

	

// 	function changeBack(){

// 		$btn.html('Submit') 
// 		$btn.css('color','#000000');
// 		btn.html = txtVal;
// 	}