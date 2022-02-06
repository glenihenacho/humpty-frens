import React, {useContext} from 'react';
import './App.css';
import { TransactionContext } from './context/TransactionContext';
import { IconButton, TextField, Typography, Button } from '@mui/material';
import Land from './views/land';
import Summary from './components/summary';
import Team from './components/team';
import { yellow } from '@mui/material/colors';

function App() {
  return (
    <div className="App">
      <Land />
    </div>
  );
}

export default App;
