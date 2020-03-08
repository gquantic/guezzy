$('input').keyup(function(){
	var value = $(this).val();
	var input = this;
	var placeholder = $(this).parent().find("span");
	var line = $(this).parent().find(".line");

	if(value != ''){
		$(placeholder).css({
			"margin-top" : "-15px",
			"font-size" : "12px",
			"color" : "#00AFFF"
		});

		$(line).css({
			"background" : "#00AFFF"
		});
	}else{
		console.log(0);

		$(placeholder).css({
			"margin-top" : "0px",
			"font-size" : "17px",
			"color" : "#000"
		});

		$(line).css({
			"background" : "#000"
		});
	}
}); 

$('input').focusin(function(){
	var line = $(this).parent().find(".line");

	$(line).css({
		"width" : "300px"
	})
});

$('input').focusout(function(){
	var line = $(this).parent().find(".line");
	var val = $(this).val();

	if(val.length < 1){
		$(line).css({
			"width" : "0px"
		});
	}
});