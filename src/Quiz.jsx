import React, { useState, useEffect, useRef } from 'react';
import './Quiz.css';
import Question from './Question';
import quizData from './quizData';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(60); // Initial time in seconds
  const [initialTime, setInitialTime] = useState(60); // Initial time for reference
  const [timeTaken, setTimeTaken] = useState(0); // Time taken in seconds
  const timerRef = useRef(null);

  // Function to start the timer
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 0) {
          handleQuizCompletion(); // Complete quiz when time runs out
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Function to handle answer click
  const handleAnswerClick = (selectedOption) => {
    // Update userAnswers with selected option
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedAnswers);

    // Check if selected option is correct and update score
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(prevScore => prevScore + 1);
    }

    // Move to the next question or complete quiz if last question
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleQuizCompletion();
    }
  }

  // Function to handle quiz completion
  const handleQuizCompletion = () => {
    setQuizCompleted(true);
    clearInterval(timerRef.current); // Stop the timer when quiz is completed
    setTimeTaken(initialTime - timeLeft); // Calculate time taken in seconds
  }

  // Function to reset quiz
  const handleQuizRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setUserAnswers(Array(quizData.length).fill(null));
    setQuizCompleted(false);
    setTimeLeft(initialTime); // Reset timer to initial time
    setTimeTaken(0); // Reset time taken
    clearInterval(timerRef.current); // Ensure timer is stopped
    startTimer(); // Start the timer again
  }

  // Effect to start the timer when quiz starts
  useEffect(() => {
    startTimer();
    setInitialTime(60); // Set initial time for reference
    // Clean up interval on component unmount or quiz completion
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  // Function to format time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <div className="quiz-container">
      {!quizCompleted && (
        <>
          <div className="timer-container">
            <p>Time Left: {formatTime(timeLeft)}</p>
          </div>
          {currentQuestion < quizData.length ? (
            <Question
              question={quizData[currentQuestion]}
              handleAnswerClick={handleAnswerClick}
            />
          ) : (
            <div>
              <p>Quiz completed!</p>
              <p>Your score: {score}/{quizData.length}</p>
              <p>Time taken: {timeTaken} seconds</p>
              <button onClick={handleQuizRestart}>Restart Quiz</button>
            </div>
          )}
        </>
      )}
      {quizCompleted && (
        <div>
          <p>Quiz completed!</p>
          <p>Your score: {score}/{quizData.length}</p>
          <p>Time taken: {timeTaken} seconds</p>
          <button onClick={handleQuizRestart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
