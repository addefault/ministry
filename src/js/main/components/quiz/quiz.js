$('.price-quiz__types li').click(function() {
    $(this).addClass('active').siblings('.active').removeClass('active');
    $('.price-quiz__questions').eq($(this).index()).addClass('active').siblings('.active').removeClass('active');
});
$('.price-quiz__question input[type=radio], .price-quiz__question input[type=checkbox]').change(function() {
    if($(this).closest('.price-quiz__question').data('quiz-number')) {
        const questionNumber = $(this).closest('.price-quiz__question').data('quiz-number');
        const optionIndex = $(this).closest('.price-quiz__radio, .price-quiz__image').index() + 1;
        $('.price-quiz__question[data-quiz-depends-question='+questionNumber+']').each(function() {
            let qNumber = $(this).data('quiz-number');
            $(this).addClass('disabled');
            if(questionNumber) {
                $(this).closest('.price-quiz__questions').find('.price-quiz__question[data-quiz-depends-question='+qNumber+']').addClass('disabled');
            }
            let dependsOptions;
            if($(this).data('quiz-depends-options') > 0) {
                dependsOptions = [parseInt($(this).data('quiz-depends-options'))];
            } else {
                dependsOptions = $(this).data('quiz-depends-options').split(',').map(item => parseInt(item));
            }
            if(dependsOptions.indexOf(optionIndex) != -1) {
                $(this).removeClass('disabled');
                if(questionNumber) {
                    $(this).closest('.price-quiz__questions').find('.price-quiz__question[data-quiz-depends-question='+qNumber+']').removeClass('disabled');
                }
            }
        });
    }
});
$('.quizSlide').click(function() {
    const question = $(this).closest('.price-quiz__question');
    const currentQuestion = question.index();
    const currentForm = $(this).closest('.price-quiz__questions');
    let needQuestion = currentQuestion;
    do {
        if($(this).hasClass('quizPrev')) {
            needQuestion--;
        } else if($(this).hasClass('quizNext')) {
            needQuestion++;
        }
    } while(currentForm.find('.price-quiz__question').eq(needQuestion).hasClass('disabled'));
    currentForm.find('.price-quiz__question').eq(needQuestion).addClass('active').siblings('.active').removeClass('active');
});
$('.quizFinish').click(function() {
    const currentForm = $(this).closest('.price-quiz__questions');
    let quizSystem = 0;
    if(currentForm.find('input[data-quiz-system]:checked').data('quiz-system') === '%') {
        quizSystem = 1;
        $('#quizResult').find('i').html('%');
    }
    let quizResult = parseFloat(currentForm.find('input[data-quiz-start]:checked').data('quiz-start').split(':')[quizSystem]);
    currentForm.find('.price-quiz__question:not(.disabled) input[data-quiz-value]:checked').each(function() {
        quizResult += parseFloat($(this).data('quiz-value').split(':')[quizSystem]);
    });
    $('#quizResult').attr('data-quiz-result', quizResult).find('span').html(quizResult.toLocaleString());
    $(this).closest('.price-quiz__question').removeClass('active');
    $('.price-quiz__result').show();
});
$('input[name=quiz_discount]').change(function() {
    const originalResult = parseFloat($('p[data-quiz-result]').data('quiz-result'));
    const discountSize = parseFloat($(this).data('quiz-discount'));
    const newResult = (100 - discountSize) * originalResult / 100;
    $('p[data-quiz-result] span').html(newResult.toLocaleString());
});