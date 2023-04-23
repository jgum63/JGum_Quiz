let quizDiv = document.querySelector("#quiz");
let questionBtn1 = document.querySelector("#answer1");
let questionBtn2 = document.querySelector("#answer2");
let questionBtn3 = document.querySelector("#answer3");
let questionBtn4 = document.querySelector("#answer4");


let timer = 90;

let timerId = setInterval(function(){

    timer -=1;
    // console.log(timer);
    document.getElementById("timerDis").textContent = timer;

}, 1000) 



let questions = [{question: "Who is the all time hits leader in the MLB?", answer: ["Barry Bonds", "Pete Rose", "Mike Trout", "Ken Griffey"], correctAnswer: "Pete Rose"},
                 {question: "Who is the all time home runs leader in the MLB?", answer: ["Barry Bonds", "Pete Rose", "Mike Trout", "Ken Griffey"], correctAnswer: "Barry Bonds"}
]

let currentQuestion = 0;

renderQuestion();

function renderQuestion(){

    console.log(questions[currentQuestion].question);
    questionBtn1.textContent = questions[currentQuestion].answer[0];
    questionBtn2.textContent = questions[currentQuestion].answer[1];
    questionBtn3.textContent = questions[currentQuestion].answer[2];
    questionBtn4.textContent = questions[currentQuestion].answer[3];
    questions[currentQuestion].correctAnswer;
}


quizDiv.addEventListener("click", function(event){

    if(event.target.matches("button")){
        console.log("clicked")
        renderQuestion();
        currentQuestion++;
    }

})
