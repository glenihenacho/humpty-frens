import React, { useContext } from 'react';
import '../App.css';
import Graphic from '../components/graphic';
import Nav from '../components/nav';
import Summary from '../components/summary';
import Team from '../components/team';
import { Container } from '@mui/material';


function Land() {
  return (
    <Container sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
      <Nav main />
      <Graphic />
      <Summary />
      <Team />
    </Container>
  );
}

export default Land;