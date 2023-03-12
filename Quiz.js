const quizDB = [
   {
     question : "que-1 What is JavaScript?",
    a: "JavaScript is a scripting language used to make the website interactive",
    b: "JavaScript is an assembly language used to make the website interactive",
    c: "JavaScript is a compiled language used to make the website interactive",
    d: "None of the mentioned",
    ans : "ans1"
   },
   {
    question:" que-2 Which of the following object is the main entry point to all client-side JavaScript features and APIs?" ,
a: "Position",
b: "Window",
c: "Standard",
d: "Location",
ans:"ans2",
},
{
   question: " que-3 Which of the following is correct about JavaScript?",
    a: "JavaScript is an Object-Based language",
    b: "JavaScript is Assembly-language",
    c:" JavaScript is an Object-Oriented language",
    d: "JavaScript is a High-level language",

    ans : "ans1",
},
    {
        question: " que-4 Which of the following scoping type does JavaScript use?",
a: "Sequential",
b: "Segmental",
c: "Lexical",
d: "Literal",
ans: "ans3",
    },
    {
        question: "que-5 Arrays in JavaScript are defined by which of the following statements?",
        a:"It is an ordered list of values",
        b: "It is an ordered list of objects",
        c: "It is an ordered list of string",
        d:" It is an ordered list of functions",
        ans :"ans1",
    },
 
{
    question:"que-6 Which of the following is not javascript data types?",
    a: "Null type",
    b: "Undefined type",
    c: "Number type",
    d: "All of the mentioned",
    ans : "ans4",
},
];


const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2= document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
// for accessing the answer input filed 
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

//for accessing every question from array will start it from 0 and increase it while function will run
let questionCount = 0 ; 
let score = 0 ;

const loadQuestion = () =>{
    //for loding question on screen we will grab question object and update  questionCount  
    const questionList = quizDB[questionCount];
    //for grabbing question and options & converting  js file into html we will do innerHtml
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

// deselectAll- created to remove by default radio button
const deselectAll = () =>{
    answers.forEach((curAnsElem) =>{
        curAnsElem.checked = false
    });
}

// for grabbing  answer choosed by the user 
const getCheckAnswer = () => {
 let answer;
 answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
        //console.log(answer);
    }
 });
 return answer;
};

submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    //for checking answer choosed by the user is correct or not & updating score if ans is correct 
    if (checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    // for loading another question
 

    deselectAll();

    if(questionCount < quizDB.length){
        
        loadQuestion();
        questionCount++;

    }
    // for showing marks of user 
    else {
        showScore.innerHTML = `<h3>You scored ${score}/ ${quizDB.length} ✌  </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;
        showScore.classList.remove("scoreArea");

    }
});