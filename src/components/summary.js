import React, { useContext } from 'react';
import '../App.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import useWindowDimensions from '../hooks/useWindowDimensions';
import preview from '../assets/0001.jpg'
import Title from '../assets/story.png'

function Text() {
    return <div 
        style={{ display: 'flex', 
            flex: 1, 
            flexDirection: 'column', 
            justifyContent: 'space-between' }}
    >
        <Typography variant="h6" color="white">
            Humpty Frens is a community driven collection of 10K randomly generated
            NFTs on the Ethereum blockchain. These tokens will symbolize victory 
            in adversity for a frenly mint price of 0.017 ETH. Find out more on 
            our Discord!
        </Typography>
        <div>
            <Button style={{ backgroundColor: 'yellow', padding: 10  }}>
                Join Our Server
            </Button>
        </div>
    </div>
}

function Summary() {
    const { height, width } = useWindowDimensions();
    const margin = width * 0.01;

    return (
        <div>
            <img src={Title} style={{ }} />
            <div style={{ alignItems: 'center', display: 'flex', height, width }}>
                <Box
                    sx={{ display: { xs: 'none', md: 'flex' },
                        marginLeft: margin,
                        marginRight: margin,
                        width: width - (margin * 2) }}
                >
                    <Stack 
                        sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}
                    >
                        {Text()}
                    </Stack>
                    <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                        <img
                            src={preview}
                            style={{ borderRadius: 20,
                                height: height / 2, 
                                objectFit: 'cover', 
                                width: height / 2 }}
                        />
                    </div>
                </Box>
                <Stack sx={{ display: { xs: 'block', md: 'none' } }}>
                    {Text()}
                    <img
                        src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        style={{ flex: 1, alignSelf: 'center', objectFit: 'cover' }}
                    />
                </Stack>
            </div>
        </div>
    );
}

export default Summary;