import React, { useContext } from 'react';
import '../App.css';
import { Box, Button, Stack, Typography } from '@mui/material';

function Summary() {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'primary.dark',
      }}
    >
      <Stack sx={{ backgroundColor: 'red', flex: 1 }}>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        <div>
          <Button style={{ backgroundColor: 'yellow', flex: 0 }}>
            Join Us
          </Button>
        </div>
      </Stack>
      <img
        src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        style={{ flex: 1, height: 100, alignSelf: 'center', objectFit: 'contain', width: 100 }}
      />
    </Box>
  );
}

export default Summary;