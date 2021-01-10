import React from "react";
import './App.css';
import Home from './Home';
import Header from './Header';
import House from './House'
import Game from './Game'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Characters from "./Characters";


function App() {
  return (
    
    <div className="App">
      <Header />
      <Router>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/house" component={House} />        
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/game" component={Game} />

        </Switch>

        
      </Router>
      
    </div>
  );
}

export default App;
