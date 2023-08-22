import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConjugationGame from './ConjugationGame';
import VocabularyGame from './VocabularyGame';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conjugation" element={<ConjugationGame />} />
          <Route path="/vocabulary" element={<VocabularyGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
