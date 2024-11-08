const question = [
    {
        questions: 'Which is the biggest Animal in the World.',
        answers: [
            {  text:'shark', correct: false},
            {  text:'Blue Whale', correct: true},
            {  text:'StraFish', correct: false},
            {  text:'Turtle', correct: false},
        ]
    },{
        questions: 'What is the smallest continent in the world.',
        answers: [
            {  text:'Asia', correct: false},
            {  text:'Austrailia', correct: true},
            {  text:'Western', correct: false},
            {  text:'Russia', correct: false},
        ]
    },
    {
        questions: 'Which is the famous vegetable in Asia',
        answers: [
            {  text:'ginger', correct: false},
            {  text:'meat', correct: false},
            {  text:'karrela', correct: false},
            {  text:'Tomato', correct: true},
        ]
    },
    {
        questions: 'Which animal is the king of Forest',
        answers: [
            {  text:'Wolf', correct: false},
            {  text:'Elephant', correct: false},
            {  text:'Lion', correct: true},
            {  text:'Rat', correct: false},
        ]
}];
let questionElement = document.querySelector('.question');
let answerBtns = document.querySelector('.answer-button');
let nextBtn = document.querySelector('.next-btn');

  let currentQuestionIndex = 0;
  let score = 0;

   function stratQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML= 'Next';
    showQuestion();
   }
   function showQuestion(){
      resetPre();
     let currentQuestion= question[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionElement.innerHTML= questionNo + '.' + currentQuestion.questions;

     currentQuestion.answers.forEach(answer => {
     const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add("btn");
   answerBtns.appendChild(button);
   if(answer.correct){
    button.dataset.correct = answer.correct;
   }
   button.addEventListener('click', selectAnswer);
 
     });
   }
    function resetPre(){
      nextBtn.style.display = 'none';
      while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
      }
    }
   function selectAnswer(e){
   const selectBtn = e.target;
   const isCorrect = selectBtn.dataset.correct === "true";
   if(isCorrect){
    selectBtn.classList.add('correct');
    score++;
   }else{
    selectBtn.classList.add('incorrect');
   }
   Array.from(answerBtns.children).forEach(button => {
    if(button.dataset.correct === 'true'){
        button.classList.add('correct');

    }
    button.disabled = true;
   });
    nextBtn.style.display = 'block';
   }
    function showScore(){
        resetPre();
        questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
        nextBtn.innerHTML = 'Play Again';
        nextBtn.style.display = 'block';
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < question.length){
           showQuestion();
        } else{
            showScore();
        }
    }
    nextBtn.addEventListener('click',()=>{
  if(currentQuestionIndex < question.length){
    handleNextButton();
  }else{
    stratQuiz();
  }
    });
   stratQuiz();