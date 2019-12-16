import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const CpuPage = () => (
  <div>
    <h1>CPU page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cpu' component={CpuPage} />
      </Switch>
    </div>
  );
}

export default App;
