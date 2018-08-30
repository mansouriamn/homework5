var currentQuestion = 0;
var totalQuestions = questions.length;
loadQuestion(currentQuestion);

function loadQuestion(cQuestion) {
    $(document).ready(function () {
        $('#question').append(questions[cQuestion].question);
        $('#opt1').append(questions[cQuestion].option1);
        $('#opt2').append(questions[cQuestion].option2);
        $('#opt3').append(questions[cQuestion].option3);
    })

}

$('#nextButton').on('click', function () {

    var answer = $("input[type='radio']:checked").val();
    
    if (!answer) {
        alert('Please select an answer!')
        return;
    }
    if (questions[currentQuestion].answer == answer) {
        alert("Correct! Proceed to next question");
        $('input[type="radio"').prop('checked', false);
        currentQuestion++;
        if (currentQuestion - totalQuestions == 0) {
            alert("You won the Game");
            clearPage();
            $('.title').empty();
            $('.title').append("Congratulations! You won the game");
        }
        clean();
        loadQuestion(currentQuestion);
    } else {
        alert("Gameover");
        clearPage();
        $('.title').empty();
        $('.title').append("Game over! Thanks for playing");
    }
})

function clean() {
    $('#question').empty();
    $('#opt1').empty();
    $('#opt2').empty();
    $('#opt3').empty();
}

function clearPage() {
    $('.question').remove();
    $('.option').remove();
    $('.nextBTN').remove();
}