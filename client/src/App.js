import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Data from './components/data'
import Search from './components/search'
import {Provider} from './Context'

function App() {
  return (
    <Provider>
      <Router>
        <Search />
        <Switch>
          <Data />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
