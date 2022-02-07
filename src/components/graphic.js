import React, { useContext } from 'react';
import '../App.css';
import { Box, Button, Stack, Typography } from '@mui/material';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Ufo from '../assets/ufo.png'
import Welcome from '../assets/welcome.png'

function Graphic() {
    const { height, width } = useWindowDimensions();

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                height,
                justifyContent: 'center',
                width
            }}
        >
            <img
                src={Welcome}
                style={{ alignSelf: 'center', objectFit: 'cover', width: width / 2 }}
            />
            <img
                src={Ufo}
                style={{ height: height / 2, alignSelf: 'flex-end', objectFit: 'cover', width: height / 2 }}
            />
        </Box>
  );
}

export default Graphic;