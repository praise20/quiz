const myQuestions = [
    {
      id: 1,
      question: "What is the ISO currency code for Angola?",
      answers: {
        a: "AOA",
        b: "AZN",
        c: "ALL"
      },
      correctAnswer: "a"
    },
    {
        id: 2,
        question: "What is the ISO currency code for Belgium?",
        answers: {
          a: "BIF",
          b: "EUR",
          c: "BHD"
        },
        correctAnswer: "b"
    },
    {
        id: 3,
        question: "What is the ISO currency code for India?",
        answers: {
          a: "ILS",
          b: "IRR",
          c: "INR"
        },
        correctAnswer: "c"
    }
  ];



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const currentQuestion = document.getElementById('currentQuestion');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const restartButton = document.getElementById('restart');
const submitButton = document.getElementById('submit');

buildQuiz();


submitButton.addEventListener('click',function(){
    showResults();
})

restartButton.addEventListener('click',function(){
    resultsContainer.innerHTML= ``
    buildQuiz();
})

// nextButton.addEventListener('click', function(){
   
// })

// prevButton.addEventListener('click', function(){
    
// })


function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach( function(currentQuestion, questionNumber){
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}<br>
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `
          <div class="question"> ${currentQuestion.id}: ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} <br>
          </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
