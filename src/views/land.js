import React, { useContext } from 'react';
import '../App.css';
import Nav from '../components/nav';
import Summary from '../components/summary';
import Team from '../components/team';

function Land() {
  return (
    <div>
      <Nav />
      <Summary />
      <Team members={[{ description: 'testing', handle: '@tester' }]} />
    </div>
  );
}

export default Land;