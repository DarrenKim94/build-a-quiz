function submitAnswers() {
    if (document.getElementById('q1Answer').checked) {
        document.getElementById('q1Text').innerHTML = 'Correct!'
    } else {
        document.getElementById('q1Text').innerHTML = 'Incorrect. The correct answer was Blue. '
    }

    if (document.getElementById('q2Answer').checked) {
        document.getElementById('q2Text').innerHTML = 'Correct!'
    } else {
        document.getElementById('q2Text').innerHTML = 'Incorrect. The correct answer was 6. '
    }
    
    if (document.getElementById('q3Answer').checked) {
        document.getElementById('q3Text').innerHTML = 'Correct!'
    } else {
        document.getElementById('q3Text').innerHTML = 'Incorrect. The correct answer was 2. '
    }
    return false
}