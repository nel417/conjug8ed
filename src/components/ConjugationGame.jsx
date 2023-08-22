

import React, { useState, useEffect } from 'react';
import verbs from '../data/presentConj';
import { Link } from 'react-router-dom';
import '../App.css'

const verbList = verbs;

function ConjugationGame() {
  const [currentVerb, setCurrentVerb] = useState(null);
  const [userConjugations, setUserConjugations] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    getRandomVerb();
  }, []);

  const getRandomVerb = () => {
    const randomVerb = Object.keys(verbList)[Math.floor(Math.random() * Object.keys(verbList).length)];
    setCurrentVerb(randomVerb);
    setUserConjugations({});
    setIsCorrect(false);
    setShowErrorMessage(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const lowercaseValue = value.toLowerCase();
    setUserConjugations((prevConjugations) => ({
      ...prevConjugations,
      [name]: lowercaseValue,
    }));
  };

  const checkConjugations = () => {
    if (!currentVerb) return;

    const correctConjugations = verbList[currentVerb];

    const isCorrect = Object.keys(correctConjugations).every(
      (person) => userConjugations[person] === correctConjugations[person]
    );

    setIsCorrect(isCorrect);
    setShowErrorMessage(!isCorrect);

    if (isCorrect) {
      setCorrectCount(correctCount + 1);
      setTimeout(getRandomVerb, 1000); // Move to a new word after 1 second
    }
  };

  return (
    <div className="conjugation-game-container">
            <Link to="/">Back to Home</Link>

      <h1 className="title">Regular ER verbs</h1>
      {currentVerb && <h2 className="verb-label">Conjugate the verb: {currentVerb}</h2>}
      {currentVerb && Object.keys(verbList[currentVerb]).map((person) => (
        <div className="conjugation-input" key={person}>
          <label className="person-label">{person}: </label>
          <input
            type="text"
            name={person}
            value={userConjugations[person] || ''}
            onChange={handleInputChange}
            disabled={isCorrect}
            className="input-field"
          />
        </div>
      ))}
      <button onClick={checkConjugations} disabled={isCorrect} className="check-button">
        Check
      </button>
      <p className="correct-count">Correct words in this session: {correctCount}</p>
      {showErrorMessage && <p className="error-message">Incorrect. Try again!</p>}
      {isCorrect && <p className="success-message">Correct! Moving to a new word...</p>}
    </div>
  );
}

export default ConjugationGame;
