$('.js-form button[type="submit"]').click(function(event){
	$(this).parents('form').find(':input[name]').each(function( index, element ) {
		if (this.required && ((element.type === 'checkbox' && !element.checked) || (element.value.length === 0))) {	
			$(element).focus(function(){
				$(this).removeClass('_required');
			});
			$(element).addClass('_required');
        }   
    });
});