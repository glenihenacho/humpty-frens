import React, {useContext} from 'react';
import './App.css';
import { IconButton, TextField, Typography, Button } from '@mui/material';
import Land from './views/land';
import Summary from './components/summary';
import Team from './components/team';

function App() {

  return (
    <div className="App">
      <Land />
    </div>
  );
}

export default App;
