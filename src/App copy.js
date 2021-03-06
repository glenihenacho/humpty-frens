import React, {useContext} from 'react';
import './App.css';
import { TransactionContext } from './context/TransactionContext';
import {IconButton, TextField, Typography, Button} from '@mui/material';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';



function App() {
  const { connectWallet, currentAccount, formData, setFormData, handleChange } = useContext(TransactionContext);

  console.log(connectWallet);


  return (
      <div className="App">
        
        {currentAccount ? <Button aria-label="delete" size="large" onClick={connectWallet}>
          <Typography> Wallet is connected </Typography>
        </Button> : <IconButton aria-label="delete" size="large" onClick={connectWallet}>
          <WalletIcon fontSize="inherit" />
        </IconButton>}

        <div>
          <TextField id="outlined-basic" label="addess to" variant="standard" handleChange={handleChange} />
          <TextField id="filled-basic" label="amount" variant="standard" handleChange={handleChange} />
          <TextField id="standard-basic" label="keyword" variant="standard" handleChange={handleChange} />
          <TextField id="standard-basic" label="message" variant="standard" handleChange={handleChange}/>
        </div>
      </div>
  );
}

export default App;