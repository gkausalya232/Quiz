import React from 'react';
import './Result.css';

function Result({ score, totalQuestions, onRestart }) {
  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your score: {score} / {totalQuestions}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default Result;
