import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import CarClass from './components/CarClass';
import AboutLocaliza from './components/AboutLocaliza';
import AboutTrybe from './components/AboutTrybe';

function App() {
  return (
    <HashRouter basename='/localiza-app/'>
      <Header />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/CarClass/:idClasse" component={CarClass} />
        <Route exact path="/localiza" component={AboutLocaliza} />
        <Route exact path="/trybe" component={AboutTrybe} />
      </Switch>
    </HashRouter>
  );
}

export default App;
