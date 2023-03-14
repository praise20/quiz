const myQuestions = [
    {
      id: 1,
      question: "1. What is the ISO currency code for Angola?",
      a: "AOA",
      b: "AZN",
      c: "ALL",
      correctAnswer: "AOA"
    },
    {
        id: 2,
        question: "2. What is the ISO currency code for Belgium?",
          a: "BIF",
          b: "EUR",
          c: "BHD",
        correctAnswer: "EUR"
    },
    {
        id: 3,
        question: "3. What is the ISO currency code for Australia?",
          a: "AUD",
          b: "AOA",
          c: "INR",
        correctAnswer: "AUD"
    },
    {
        id: 4,
        question: "4. What is the ISO currency code for Nigeria?",
          a: "ALL",
          b: "EUR",
          c: "NGN",
        correctAnswer: "NGN"
    },
    {
        id: 5,
        question: "5. What is the ISO currency code for India?",
          a: "ILS",
          b: "IRR",
          c: "INR",
        correctAnswer: "INR"
    }
  ];


const quizContainer = document.getElementById('quiz')
const quizQuestion = document.getElementById('question');
const resultsContainer = document.getElementById('results');
const options = document.getElementById('options');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
let inputValueA = document.querySelector('.value_a');
let inputValueB = document.querySelector('.value_b');
let inputValueC = document.querySelector('.value_c');


//buttons
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const endButton = document.getElementById('end');
const restartButton = document.getElementById('restart');
const homeButton = document.getElementById('home');


let currentQuestion = 0;
let numCorrect = 0


window.addEventListener('DOMContentLoaded',function(){
    startQuiz();
});

function startQuiz(){
    quizQuestion.textContent = myQuestions[currentQuestion].question;
    option1.innerText= myQuestions[currentQuestion].a;
    option2.innerText= myQuestions[currentQuestion].b;
    option3.innerText= myQuestions[currentQuestion].c;

    //disable buttons
    // submitButton.disabled = true;
    // submitButton.style.backgroundColor  = 'antiquewhite';
    nextButton.disabled = true;
    nextButton.style.backgroundColor  = 'antiquewhite';
    endButton.style.display = 'none';
    restartButton.style.display = 'none';
    homeButton.style.display = 'none';
}  


function evaluate(){
    let i = document.querySelector('input[name="select"]:checked');
    console.log(i)
    inputValueA.value = myQuestions[currentQuestion].a;
    console.log(inputValueA);
    inputValueB.value = myQuestions[currentQuestion].b;
    console.log(inputValueB);
    inputValueC.value = myQuestions[currentQuestion].c;
    console.log(inputValueC);

    let answer= myQuestions[currentQuestion].correctAnswer;
    console.log(answer);

    let selectedValue = i.value;
    console.log(selectedValue);

    if(selectedValue === answer){
        numCorrect++;
        console.log('yes')
         console.log(numCorrect);
   
        //  // color the answers green
        //  quizContainer.style.color = 'lightgreen';
    }
    else{
        numCorrect = numCorrect;
        console.log('no')
        console.log(numCorrect);

        // // color the answers green
        // quizContainer[0].style.color = 'red';
    }
}


submitButton.addEventListener('click',function(){
    evaluate();
    if(currentQuestion < myQuestions.length-1){
        nextButton.style.display = 'block';
        nextButton.disabled = false;
        nextButton.style.backgroundColor  = 'rgb(189, 53, 132)';
    }
    // else if(currentQuestion < myQuestions.length-2){
    //     nextButton.style.display = 'none';
    //     endButton.disabled = true
    // }
    else{
        nextButton.style.display = 'none';
        endButton.style.display = 'block'
    }
});

endButton.addEventListener('click',function(){
    console.log('clicked');
    if(numCorrect < 3 ){
        resultsContainer.innerHTML = `<br/> Thanks for taking the quiz<br/><br/> You scored ${numCorrect} out of ${myQuestions.length} try harder <br/>`;
    }
    else{
        resultsContainer.innerHTML = `<br/> Thanks for taking the quiz<br/><br/> You scored ${numCorrect} out of ${myQuestions.length} well done <br/>`;
    } 

    // submitButton.disabled = true;
    // submitButton.style.backgroundColor  = 'antiquewhite';
    // endButton.disabled = true;
    // endButton.style.backgroundColor  = 'antiquewhite';
    quizContainer.style.display = 'none'
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
    endButton.style.display = 'none';
    restartButton.style.display = 'none'
    homeButton.style.display = 'block'
});

nextButton.addEventListener('click', function(){
    currentQuestion++;
    // quizContainer.style.color = 'black';
    if(currentQuestion < myQuestions.length){
     startQuiz();
    }
 });

restartButton.addEventListener('click', function(){
    currentQuestion = 0;
    startQuiz();
 });
 

 