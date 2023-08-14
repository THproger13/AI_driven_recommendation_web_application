// App.js (Main component)
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import SignupAndSurvey from './components/SignupAndSurvey';
import CafeRecommendations from './components/CafeRecommendations';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  return (
    <div className="App">
      <Header loggedInUser={loggedInUser} />

      {!loggedInUser ? (
        <>
          <Login setLoggedInUser={setLoggedInUser} />
          <SignupAndSurvey setSurveyCompleted={setSurveyCompleted} />
        </>
      ) : (
        !surveyCompleted ? (
          <SignupAndSurvey setSurveyCompleted={setSurveyCompleted} />
        ) : (
          <CafeRecommendations />
        )
      )}
      <Footer />
    </div>
  );
};

export default Header;