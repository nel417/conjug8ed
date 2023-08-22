// import React from 'react'
// import { Link, } from 'react-router-dom';

// const Home = () => {
//         return (
//           <div>
//             <h1>Problem sets</h1>
//             <div className="card">
//               <Link to="/regularER">
//                 <h2>Regular er verbs</h2>
//                 <p>Practice verb conjugations</p>
//               </Link>
//             </div>
//             <div className="card">
//               <Link to="/irregularER">
//                 <h2>Irregular er verbs</h2>
//                 <p>Practice verb conjugations</p>
//               </Link>
//             </div>
//             <div className="card">
//               <Link to="/regularIR">
//                 <h2>Regular ir verbs</h2>
//                 <p>Practice verb conjugations</p>
//               </Link>
//             </div>
//             <div className="card">
//               <Link to="/irregularIR">
//                 <h2>Irregular ir verbs</h2>
//                 <p>Practice verb conjugations</p>
//               </Link>
//             </div>
//           </div>
//         );
//       }
  

// export default Home

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your custom styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>Problem sets</h1>
      <div className="card-container">
        <div className="card">
          <Link to="/regularER">
            <h2>Regular er verbs</h2>
            <p>Practice verb conjugations</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/irregularER">
            <h2>Irregular er verbs</h2>
            <p>Practice verb conjugations</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/regularIR">
            <h2>Regular ir verbs</h2>
            <p>Practice verb conjugations</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/irregularIR">
            <h2>Irregular ir verbs</h2>
            <p>Practice verb conjugations</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

