import React from 'react'
import { Link, } from 'react-router-dom';

const Home = () => {
        return (
          <div>
            <h1>Problem Set Cards</h1>
            <div className="card">
              <Link to="/conjugation">
                <h2>Conjugation Game</h2>
                <p>Practice verb conjugations.</p>
              </Link>
            </div>
            <div className="card">
              <Link to="/vocabulary">
                <h2>Vocabulary Game</h2>
                <p>Test your vocabulary skills.</p>
              </Link>
            </div>
          </div>
        );
      }
  

export default Home