import React, {useContext} from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Button, Box, Stack, Grid } from '@mui/material';
import { TransactionContext } from '../../context/TransactionContext';
import Timer from '../../components/Timer';
import MintBtn from '../../components/mintBtn';
import MintCounter from '../../components/mintCounter';
import ImgGif from './imgGif';
import Nav from '../../components/nav';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import '../../timer.css';
import Title from '../../assets/mint.png';
import preview from '../../assets/0001.jpg';


const useStyles = makeStyles((theme) =>({
    root:{
    }
}))


export default function MintPge(){

    const { height, width } = useWindowDimensions();
    const startDate = new Date().getTime() + 86400000; 

    const classes =  useStyles();

    return(
        <Box
            className={classes.root}
            sx={{
                flexGrow: 1,
                flexShrink:1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor:'red',
                height, 
                width,
                padding: 'auto'
            }}
        >
            <Grid container spacing={4}>
                <Grid item xs={12}> <Nav /> </Grid>
                <Grid item xs={12} md={6}>
                    <MintBtn />
                </Grid>
                <Grid item xs={12} md={6} style={{ justifyContent: 'center', display: 'flex' }}>
                    <img src={preview} style={{ borderRadius: 10, height: height / 2, width: height / 2 }} />
                </Grid>
            </Grid>
        </Box>
    )
}
