import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConjugationGame from './components/ConjugationGame';
import VocabularyGame from './components/VocabularyGame';
import RegularIR from './components/RegularIR';
import './App.css';
import Home from './components/Home';
import IrregularIR from './components/IrregularIR';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regularER" element={<ConjugationGame />} />
          <Route path="/irregularER" element={<VocabularyGame />} />
          <Route path="/regularIR" element={<RegularIR />} />
          <Route path="/irregularIR" element={<IrregularIR />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
