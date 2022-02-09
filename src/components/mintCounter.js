import React from 'react';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) =>({
    text:{
        textAlign: 'center',
        marginTop: '4%',
        marginBottom: '1%',
        ['@media (min-width: 650px) and (max-width: 1175px)']: {
        },
        //Large Tablet & Small Desktop
        ['@media (min-width: 1000px) and (max-width: 1279px)']: {
        },
        ['@media (min-width: 1280px) and (max-width: 1583px)']: {
            textAlign: 'left',
            marginBottom: '4',
        },
    }
}))

export default function MintCounter(){

    const classes = useStyles()

    return(
        <div className={classes.text}>
            <Typography color='white' variant='h7'>
                0/10000 Minted
            </Typography>
        </div>
    )

}