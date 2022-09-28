var questions = [
    {
        question: "Inside which HTML element do we put the javascript?",
        choices: [
            { text: "<script>", correct: true}, 
            { text: "<scripting>", correct: false}, 
            { text: "<js>", correct: false}, 
            { text: "<javascript>", correct: false}, 
         ]
    },
    {
        question: "How does a WHILE loop start?",
        choices: [
            {text:"while i=1 to 10", correct: false},
            {text:"while(i <= 10)", correct: true},
            {text:"while (i<= 10; i++)", correct: false},
            {text:"while !!i=1 to !!10", correct: false},
        ],
     
    },
    {
        question: "How do you add an comment in javascript?",
        choices: [
            {text: "//This is a comment", correct: true},
            {text: "'This is a comment", correct: false},
            {text: "<!--This is a comment-->", correct: false},
            {text: "^^This is a comment^^", correct: false}  
        ],
     
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        choices: [
            {text: "rnd(7.25)", correct: false},
            {text: "round(7.25)", correct: false},
            {text: "Math.rnd(7.25)", correct: false},
            {text: "Math.round(7.25)", correct: true},
        ]
    },
];

var start = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionc = document.getElementById('question-c')
var instructions = document.getElementById('instructions')
var next = document.getElementById('next-btn')
var questionele = document.getElementById('question')
var answerbtn = document.getElementById('answer-btn')
var sq , cq
var highscore = document.getElementById('highscore-btn')
var startTime = 60
var timerEl = document.querySelector(".timer");
start.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    cq++
    setNextQuestion()
})
highscore.addEventListener('click')

function startGame(){
    console.log('Started')
    start.classList.add('hide')
    instructions.classList.add('hide')
    questionc.classList.remove('hide')
    next.classList.remove('hide')
    sq = questions
    cq = 0
    setNextQuestion()
    startTimer()
}

function setNextQuestion(){
    resetState()
    showQuestion(sq[cq])

}
function showQuestion(question) {
    questionele.innerText = question.question
    question.choices.forEach(choices =>{
        const button = document.createElement('button')
        button.innerText = choices.text
        button.classList.add('btn')
        if (choices.correct) {
            button.dataset.correct = choices.correct
        }
        button.addEventListener('click',selectAnswer)
        answerbtn.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerbtn.firstChild) {
        answerbtn.removeChild
        (answerbtn.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setSC(document.body, correct)
    Array.from(answerbtn.children).forEach(button => {
        setSC(button, button.dataset.correct)
    })
    if (sq.length > cq + 1) {
    nextButton.classList.remove('hide')
    } else {
        highscore.innerText = 'Highscore'
       highscore.classList.remove('hide')
    }
}

function setSC(element, correct){
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

var quiz;

function startTimer() {
timerEl.innerText = startTime;
 quiz = setInterval(function () {
    if (startTime > 0){
    startTime--;
    timerEl.textContent = startTime;
    } else {
        clearInterval();
    }
}, 1000);
}



// var time = 1
// function startTimer() {
// timerEl.innerText = startTime;
// var downloadTimer = setInterval(function(){
//     if(startTime <= 0){
//       clearInterval(downloadTimer);
//     }
//     startTime -= 1;
//   }, 1000);
// }


// function startTimer(num) {
//     //start the interval
//     timerEl.innerText = startTime;
//     var counter = setInterval(function () {
//         document.getElementById('timer').innerHTML = num; //write to div
//         num-- || clearInterval(counter); //clear (stop) if its 0
//     }, 1000);
// }
// startTimer(60);
// function showQuestions (q){
//     let question = document.getElementById('question')
//     question.textContent = q[0].question;
//     let choices = document.querySelectorAll('choices')
//     console.log(choices)
// }

// showQuestions();
