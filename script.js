function submitAnswers() {
    if (document.getElementById('q1Answer').checked) {
        document.getElementById('q1Text').innerHTML = 'Correct!'
    } 
    return false
}