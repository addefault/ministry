
$('.js-form').submit(function(){
    const formName = $(this);
    formName.find('button').prop('disabled', true);
    formName.find('.form__message').fadeIn(350);
    var data = new FormData();  
    formName.find(':input[name]').each(function(i, element) { 
        var field = $(this);
        if (field.val()) {
            data.append(field.attr('name'), field.val());
        }
    });
    $.ajax({
        url:  'form/form.php', 
        type:  "POST",
        data: data,
        contentType: false,
        cache: false, 
        processData:false, 
        success: function (e) {
            formName.find(".form__loading").hide();
            formName.find(".form__success").show();
            formName.trigger("reset");
            $('.form__field').removeClass('_required');

            setTimeout(function () {
              formName.find(".form__message").fadeOut();
            }, 3500);
            formName.find("button").prop("disabled", !1);
        },
        error: function (e, i, t) {
            formName.find(".form__loading").hide(),
            formName.find(".form__error").show(),
            setTimeout(function () {
              formName.find(".form__message").fadeOut();
            }, 3500);
            formName.find("button").prop("disabled", !1);
        },
    });
    return false;
});

$('.quiz-form').submit(function(){
    let data = new FormData();
    const formName = $(this);
    let formDetails = '';
    data.append('type', $('.price-quiz__types li.active').text());
    formName.find(':input[name]').each(function() { 
        var field = $(this);
        if (field.val()) {
            data.append(field.attr('name'), field.val());
        }
    });
    $('.price-quiz__questions.active .price-quiz__question:not(.disabled) input:checked').each(function() {
        let field = $(this);
        formDetails += $.trim(field.siblings('label').find('span.name').text()) + ', ';
    });
    data.append('details', formDetails);
    data.append('result', $.trim($('#quizResult').text()));
    if($(this).hasClass('pdf-form')) {
        $.ajax({
            url:  'form/pdf.php', 
            type:  "POST",
            data: data,
            contentType: false,
            cache: false, 
            processData:false,
            success: function (e) {
                console.log(e);
            },
            error: function (e, i, t) {
                console.log(e);
            },
        });
    } else {
        $.ajax({
            url:  'form/quiz.php', 
            type:  "POST",
            data: data,
            contentType: false,
            cache: false, 
            processData:false,
            success: function (e) {
                formName.find(".form__loading").hide();
                formName.find(".form__success").show();
                formName.trigger("reset");
                $('.form__field').removeClass('_required');
    
                setTimeout(function () {
                  formName.find(".form__message").fadeOut();
                }, 3500);
                formName.find("button").prop("disabled", !1);
            },
            error: function (e, i, t) {
                formName.find(".form__loading").hide(),
                formName.find(".form__error").show(),
                setTimeout(function () {
                  formName.find(".form__message").fadeOut();
                }, 3500);
                formName.find("button").prop("disabled", !1);
            },
        });
    }
    
    return false;
});