import React, { useContext } from 'react';
import '../App.css';
import { Box, Button, Stack, Typography } from '@mui/material';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Ufo from '../assets/ufo.png'
import Welcome from '../assets/welcome.png'
import Welcome2 from '../assets/welcome2.png'

function Graphic() {
    const { height, width } = useWindowDimensions();

    return (
        <div>
            <Box
                sx={{
                    alignItems: 'center',
                    display: { xs: 'none', md: 'flex' },
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
                    style={{ alignSelf: 'flex-end', height: height / 2, objectFit: 'cover' }}
                />
            </Box>
            <Stack
                sx={{
                    alignItems: 'center',
                    display: { xs: 'flex', md: 'none' },
                    height,
                    justifyContent: 'center',
                    width
                }}
            >
                <img
                    src={Welcome2}
                    style={{ alignSelf: 'center', height: height / 2, objectFit: 'contain', width }}
                />
                <img
                    src={Ufo}
                    style={{ alignSelf: 'center', width: width / 2, objectFit: 'contain', flex: 1 }}
                />
            </Stack>
        </div>
  );
}

export default Graphic;