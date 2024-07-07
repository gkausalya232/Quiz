// Question.jsx

import React, { useState } from 'react';

import './Question.css';
import './Result.css';

const Question = ({ question, handleAnswerClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    handleAnswerClick(optionIndex);
  }

  return (
    <div className="question-container">
      <h2 className="question-text">{question.questionText}</h2>
      <ul className="options-list">
        {question.options.map((option, index) => (
          <li key={index} className={`option ${selectedOption === index ? 'selected' : ''}`} onClick={() => handleOptionClick(index)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
