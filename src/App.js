import React from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from '../src/components/Home'
import Skills from '../src/components/Skills'
import Experiences from '../src/components/Experiences'
import Educations from '../src/components/Educations'
import Portfolios from '../src/components/Portfolios'



function App() {
  return (
      <Router>
        <>
        <Route exact path='/' component={Home}/>
        <Switch >
          <Route path='/skills' component={Skills}/>
          <Route path='/experiences' component={Experiences}/>
          <Route path='/educations' component={Educations}/>
          <Route path='/portfolios' component={Portfolios}/>
          
        </Switch>
        </>
      </Router>
  );
}

export default App;
