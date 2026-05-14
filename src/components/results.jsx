 function Results({questionBank, userAnswers,restartQuiz}){
    function getScore(){
        let finalScore = 0;
        userAnswers.forEach((answer,index) =>{
            if (answer=== questionBank[index].answer){
                finalScore++;
            }
        });

        return finalScore
    }
    const score = getScore();
   
    return (<div>
        <h2>Quiz Completed</h2>
        Your score: {score}/{questionBank.length}
        <button className="restart-button" onClick={restartQuiz}>Retake Quiz</button>
    </div>
    )
}
export default Results;