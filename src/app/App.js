import React from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom'
import HomePage from '../pages/home-page'
import CreatePersonPage from '../pages/create-person-page'
import Header from '../components/header'
import InstitutionPage from '../pages/institution-page'

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/create-person' component={CreatePersonPage}/>
        <Route exact path='/institution' component={InstitutionPage}/>
      </Switch>
    </div>
  );
}

export default App;
