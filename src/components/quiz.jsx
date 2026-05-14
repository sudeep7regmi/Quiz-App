import { useState } from "react";
import Results from "./results";
function Quiz() {
  const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is the capital of Spain?",
      options: ["berlin", "Madrid", "Paris", "Rome"],
      answer: "Madrid",
    },
    {
      question: "What is the capital of Nepal",
      options: ["berlin", "Madrid", "Paris", "Kathmandu"],
      answer: "Kathmandu",
    },
    {
      quetion: "What is the largest Ocean?",
      options: ["Artic", "Pacific", "Atlantic", "Indian"],
      answer: "Paris",
    },
  ];

  const initialAnswers = [null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const selectedAnswer = userAnswers[currentQuestion]
  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
  }
  function gotoNext() {
    if (currentQuestion === questionBank.length - 1){
        setIsQuizFinished(true);
    }else{
    setCurrentQuestion(currentQuestion + 1);
  }
}
  function gotoPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }
  function restartQuiz(){
    
}
  if(isQuizFinished){
    return <Results userAnswers={userAnswers} questionBank={questionBank}
    restartQuiz={restartQuiz}/>;
  }
    
    
  return (
    <div>
      <h2>Question {currentQuestion +1}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option) => (
        <button clasName={"option" + (selectedAnswer === option ? "selected":"")}
        onClick={() => handleSelectOption(option)}>
    
          {option}
          
        </button>
      ))}
      <div className="nav-buttons">
        <button onClick={gotoPrev} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={gotoNext} disabled ={!selectedAnswer}>
            {currentQuestion === questionBank.length - 1 ? "Submit" : "Next"}  
    
            </button>
      </div>
    </div>
  );
}
export default Quiz;
