$('input').keyup(function(){
	var value = $(this).val();
	var input = this;
	var placeholder = input+' span';

	if(value != ''){
		console.log(1);

		$('.input-text span').css({
			"margin-top" : "-15px",
			"font-size" : "12px",
			"color" : "#00AFFF"
		});

		$('.line').css({
			"background" : "#00AFFF"
		});
	}else{
		console.log(0);

		$('.input-text span').css({
			"margin-top" : "0px",
			"font-size" : "17px",
			"color" : "#000"
		});

		$('.line').css({
			"background" : "#000"
		});
	}
}); 

$('input').focusin(function(){
	$('.line').css({
		"width" : "300px"
	})
});

$('input').focusout(function(){
	$('.line').css({
		"width" : "0px"
	})
});