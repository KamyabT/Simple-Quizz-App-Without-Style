import React, { Component, useState } from "react";

const Quizz = () => {
  const questions = [
    {
      questionText: "What is the capital of France ?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "What is the Iphone brand?",
      answerOptions: [
        { answerText: "Samsung", isCorrect: false },
        { answerText: "Sony", isCorrect: false },
        { answerText: "Nokia", isCorrect: false },
        { answerText: "Apple", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of UK ?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: true },
        { answerText: "Paris", isCorrect: false },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "What is the CEO of Amazon ?",
      answerOptions: [
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Jeff Bezos", isCorrect: true },
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Tim Cook", isCorrect: false },
      ],
    },
  ];

  const [currentquestion, setCurrentquestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (answerOption) => {
    const newScore = score + 1;
    if (answerOption === true) {
      setScore(newScore);
    }
    const nextQuestion = currentquestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentquestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="mainDesign">
      <div className="appContainer">
        {showScore ? (
          <div className="scoreDesign">
            You Scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div>
              <div className="questionStatusContainer">
                <span className="questionStatus">Question {currentquestion + 1}</span>/ {questions.length}
              </div>
              <div className="questionTxt">{questions[currentquestion].questionText}</div>
            </div>
            <div className="btnContainerDesign">
              {questions[currentquestion].answerOptions.map((eachAnswer) => (
                <button
                  className="btnDesign"
                  onClick={() => handleClick(eachAnswer.isCorrect)}
                >
                  {eachAnswer.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quizz;
