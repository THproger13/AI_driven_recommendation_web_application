

// App.js (Main component)
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Survey from './components/Survey';
import CafeRecommendations from './components/CafeRecommendations';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  return (
    <div className="App">
      <Header loggedInUser={loggedInUser} />
      {!loggedInUser && <Login setLoggedInUser={setLoggedInUser} />}
      {!loggedInUser && <Signup setLoggedInUser={setLoggedInUser} />}
      {loggedInUser && !surveyCompleted && <Survey setSurveyCompleted={setSurveyCompleted} />}
      {loggedInUser && surveyCompleted && <CafeRecommendations />}
      <Footer />
    </div>
  );
};
export default Header;









