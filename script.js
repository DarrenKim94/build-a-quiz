let q1a = document.getElementById('q1Answer').innerHTML;
let q1b = document.getElementById('q2Answer').innerHTML;
let q1c = document.getElementById('q3Answer').innerHTML;



function submitAnswers() {
    if (document.getElementById('q1Answer').checked) {
        document.getElementById('q1Text').innerHTML = 'Correct!'
    } else {
        document.getElementById('q1Text').innerHTML = 'Incorrect. The correct answer was '
    }
    return false
}