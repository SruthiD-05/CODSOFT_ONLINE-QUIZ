let questions = [

{
question:"Which language is used for web development?",
options:["Python","HTML","C++","Java"],
answer:1
},

{
question:"Which company developed JavaScript?",
options:["Microsoft","Netscape","Google","Apple"],
answer:1
},

{
question:"What does CSS stand for?",
options:[
"Color Style Sheets",
"Cascading Style Sheets",
"Creative Style System",
"Coding Style Sheets"],
answer:1
}

];

let current = 0;
let score = 0;

let questionElement = document.getElementById("question");
let options = document.getElementsByClassName("option");
let result = document.getElementById("result");
let restartBtn = document.getElementById("restartBtn");

function loadQuestion(){

let q = questions[current];

questionElement.innerText = q.question;

for(let i=0;i<options.length;i++){
options[i].innerText = q.options[i];
options[i].classList.remove("correct","wrong");
options[i].disabled = false;
}

}

function selectAnswer(index){

let correct = questions[current].answer;

for(let i=0;i<options.length;i++){

options[i].disabled = true;

if(i === correct){
options[i].classList.add("correct");
}
else if(i === index){
options[i].classList.add("wrong");
}

}

if(index === correct){
score++;
}

}

function nextQuestion(){

current++;

if(current < questions.length){
loadQuestion();
}
else{

document.getElementById("result").innerHTML =
"<h2>Your Score: "+score+" / "+questions.length+"</h2>";

document.getElementById("nextBtn").style.display="none";
restartBtn.style.display="inline-block";

}

}

function restartQuiz(){

current = 0;
score = 0;

document.getElementById("nextBtn").style.display="inline-block";
restartBtn.style.display="none";
result.innerHTML="";

loadQuestion();

}

loadQuestion();