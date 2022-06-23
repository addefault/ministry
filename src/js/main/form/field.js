function formFieldValid(element) {
	if (element.type === 'checkbox' && element.required) {
		if (element.checked) {
			$(element).removeClass('_required');
		} else {
			$(element).addClass('_required');
		}
	} else if (element.required) {
		$(element).removeClass('_required')
	}
}

$('.form__field').click(function(){formFieldValid(this);});
$('.form__field').focus(function(){formFieldValid(this);});
$('.form__checkbox input[type=checkbox]').change(function(){formFieldValid(this);});
$('.form__field').focusout(function(){
	if (this.required && this.value.length === 0) {
		$(this).addClass('_required');	
	}

	if (this.type === 'email') {
		if ((this.required && this.value.length === 0) || !this.validity.valid) {
			$(this).addClass('_required');	
		}
	}
});
