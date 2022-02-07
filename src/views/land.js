import React, { useContext } from 'react';
import '../App.css';
import Graphic from '../components/graphic';
import Nav from '../components/nav';
import Summary from '../components/summary';
import Team from '../components/team';

function Land() {
  return (
    <div>
      <Nav />
      <Graphic />
      <Summary />
      <Team />
    </div>
  );
}

export default Land;