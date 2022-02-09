import React, { useContext } from 'react';
import '../App.css';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import useWindowDimensions from '../hooks/useWindowDimensions';
import '../App.css';
import egg from '../assets/0001.jpg';
import Title from '../assets/team.png';

const members = [
    { 
        "description": 'Idea Fren', 
        "handle": '@humptyJ', 
        "pfp": egg 
    },
    { 
        "description": 'Code Fren', 
        "handle": '@humptyW',  
        "pfp": egg 
    },
    { 
        "description": 'Utility Fren',
        "handle": '@humptyG', 
        "pfp": egg 
    },
    { 
        "description": 'Best Fren', 
        "handle": '@humptyA',  
        "pfp": egg 
    }
]

function Team() {
    const { height, width } = useWindowDimensions();

    return (
        <div>
            <img src={Title} style={{ }}></img>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    width
                }}
            >
                {members.map(({ description, handle, pfp }) => <div>
                    <Stack 
                        sx={{ alignItems: 'center',
                            borderRadius: 10,
                            padding: 10 }}
                    >
                        <Avatar 
                            sx={{ height: 200, marginTop: 5, width: 200 }}
                            src={pfp}
                        />
                        <Typography  
                            color="white" 
                            sx={{ padding: 2 }}
                            variant="h5"
                        >
                            {handle}
                        </Typography>
                        <Typography 
                            color="white"
                            sx={{ paddingBottom: 5, 
                                paddingLeft: 5, 
                                paddingRight: 5, 
                                textAlign: 'center' }}
                            variant="h7" 
                        >
                            {description}
                        </Typography>
                    </Stack>
                </div>)}
            </Box>
        </div>
    );
}

export default Team;