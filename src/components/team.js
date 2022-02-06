import React, { useContext } from 'react';
import '../App.css';
import { Avatar, Box, Stack, Typography } from '@mui/material';

function Team({ members }) {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'primary.dark',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
    >
        {members.map(({ description, handle, pfp }) => <Stack 
            sx={{ alignItems: 'center', 
                backgroundColor: 'red', 
                display: 'flex', maxWidth: 345 }}
        >
            <Avatar 
                sx={{ height: 100, marginTop: 5, width: 100 }}
                src={pfp}
            />
            <Typography  
                color="text.secondary" 
                sx={{ padding: 2 }}
                variant="h6"
            >
                {handle}
            </Typography>
            <Typography 
                color="text.secondary"
                sx={{ paddingBottom: 5, 
                    paddingLeft: 5, 
                    paddingRight: 5, 
                    textAlign: 'center' }}
                variant="body2" 
            >
                {description}
            </Typography>
        </Stack>)}
    </Box>
  );
}

export default Team;