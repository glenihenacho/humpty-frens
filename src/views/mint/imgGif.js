import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box} from '@mui/material';
import humptyFren from '../../assets/0001.jpg';


export default function ImgGif() {
    return (
        <Box
            sx={{
                // backgroundColor: 'red',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Card sx={{ width:{ xs:500, md: 400, lg: 500}, borderRadius: 5}}>
                <CardMedia
                    component="img"
                    height="500"
                    image={humptyFren}
                    alt="green iguana"
                />
            </Card>
        </Box>
    );
}