import React, { useContext } from 'react';
import '../App.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import useWindowDimensions from '../hooks/useWindowDimensions';
import preview from '../assets/0001.jpg'
import Title from '../assets/story.png'

function Text(shrink) {
    return <Stack
        spacing={10}
        sx={{ display: 'flex', flex: 1, textAlign: shrink ? 'center' : null }}
    >
        <Typography variant="h6" color="white">
            Humpty Frens is a community driven collection of 10K 
            eggs to remind you that it's not about how hard you fall, but more so about
            how fast you get up. Find out more on our Discord!
        </Typography>
        <div>
            <Button style={{ backgroundColor: 'yellow', padding: 10  }}>
                Join Our Server
            </Button>
        </div>
    </Stack>
}

function Summary() {
    const { height, width } = useWindowDimensions();
    const margin = width * 0.01;

    return (
        <div style={{ paddingBottom: 200 }}>
            <img src={Title} style={{ paddingBottom: 20 }} />
            <div style={{ display: 'flex', width }}>
                <Box
                    sx={{ display: { xs: 'none', md: 'flex' },
                        marginLeft: margin,
                        marginRight: margin,
                        width: width - (margin * 2) }}
                >
                    {Text()}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
                        <img
                            src={preview}
                            style={{ borderRadius: 20,
                                height: height / 2, 
                                objectFit: 'cover', 
                                width: height / 2 }}
                        />
                    </div>
                </Box>
                <Stack
                    spacing={10}
                    sx={{ display: { xs: 'flex', md: 'none' }, 
                    marginLeft: margin, 
                    marginRight: margin }}
                >
                    <img
                        src={preview}
                        style={{ alignSelf: 'center',
                            borderRadius: 20,
                            height: width / 2, 
                            objectFit: 'contain',
                            width: width / 2 }}
                    />
                    {Text(true)}
                </Stack>
            </div>
        </div>
    );
}

export default Summary;