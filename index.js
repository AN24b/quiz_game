var quizdata = [
    {
        question: "Which Framework is related to js ?",
        a: ".Net",
        b: "Flask",
        c: "React",
        d: "Django",
        correct: 'c'
    },

    {
        question: "Which is not programming language ?",
        a: "HTML",
        b: "Java",
        c: "Python",
        d: "JS",
        correct: 'a'
    },

    {
        question: "Which is not a framework ?",
        a: "React",
        b: "JavaScript",
        c: "Angular",
        d: "django",
        correct: 'b'
    },

    {
        question: "CSS stands for",
        a: "cascading style state",
        b: "cascading style sheet",
        c: "cascading sheet of style",
        d: "none",
        correct: 'b'
    }
]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentquestion = 0
var quizscore = 0

loadQuiz()

function loadQuiz() {
    deselect()

    question.innerHTML = quizdata[currentquestion].question
    option_a.innerText = quizdata[currentquestion].a
    option_b.innerText = quizdata[currentquestion].b
    option_c.innerText = quizdata[currentquestion].c
    option_d.innerText = quizdata[currentquestion].d
}

function deselect() {
    answer.forEach(answer => answer.checked = false)
}

submitbtn.addEventListener('click', () => {

    var selectoption
    answer.forEach(answer => {

        if (answer.checked) {
            selectoption = answer.id
        }
    })

    if (selectoption == quizdata[currentquestion].correct) {
        quizscore = quizscore + 1
    }

    currentquestion = currentquestion + 1

    if (currentquestion == quizdata.length) {
        document.getElementById('quizdiv').innerHTML = `<h5>You have answered ${quizscore} correctly out of ${quizdata.length} </h5>`;
    }
    else {
        loadQuiz()
    }
})