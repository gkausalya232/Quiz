// App.jsx

import React, { useState } from 'react';
import './App.css';
import Quiz from './Quiz'; // Assuming Quiz component is in Quiz.jsx

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  }

  return (
    <div className="app-container">
      {!quizStarted ? (
        <div>
          <h1 className="app-title">React Quiz</h1>
          <button className="start-button" onClick={startQuiz}>Start Quiz</button>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default App;
