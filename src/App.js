import React, {useContext} from 'react';
import './App.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import Land from './views/land';
import MintPge from './views/mint/mintPge';
import Summary from './components/summary';
import Team from './components/team';
import { TransactionProvider } from './context/TransactionContext';

function App() {

  return (
    <div className="App">
      <TransactionProvider>
        <Router>
          <Routes>
              <Route exact path = "/" element={ <Land/> } />
              <Route exact path = "/mint" element={ <MintPge/> } />
          </Routes>
        </Router>
      </TransactionProvider>
    </div>
  );
}

export default App;
