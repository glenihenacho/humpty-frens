import React from 'react';
import { Button, Box, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Timer from './Timer';
import '../timer.css';
import MintCounter from './mintCounter';
// import CountDownClock from './countDownClock';



const useStyles = makeStyles((theme) =>({
    root:{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'left',
        alignItems: 'center',
        marginTop: '10%'
    },
    button:{
        maxWidth:'70%',
        minWidth:'70%',
        width: '70px'
    },
    mintBtnContainer:{
        marginTop:'10%'
    }
}))

export default function MintBtn(){
    const startDate = new Date().getTime() + 86400000; 


    const classes = useStyles()

    return(
        <Box
            className = {classes.root}
        >
            <Timer startDate={startDate}/>
            <div className={classes.mintBtnContainer}>
                <TextField
                    InputLabelProps={{ sx: { color: 'white', textColor: 'white' }}}
                    label="Mint limit is 20"
                    variant="outlined"
                    placeholderColor='white'
                    size="small"
                    sx={{ height: 40 }}
                />
                <Button variant='contained' size='large' sx={{height:40}} >
                    Mint
                </Button>
            </div>
            <MintCounter />
        </Box>
        
    )

}