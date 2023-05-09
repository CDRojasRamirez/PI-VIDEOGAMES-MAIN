import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import HomePage from './components/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom'
import DetailCard from './components/DetailCard/DetailCard';
// import { useEffect, useState } from 'react';
// import axios from 'axios'
// import { useParams } from 'react-router-dom';

function App() {

  

  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/'><LandingPage /></Route>
        <Route path='/home'><HomePage /></Route>
        <Route path='/detail/:IDgame'><DetailCard /></Route>
      </Switch>
    </div>
  );
}

export default App;
