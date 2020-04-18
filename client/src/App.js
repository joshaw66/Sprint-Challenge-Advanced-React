import React from 'react';
import PlayerCard from './components/PlayerCard';
import {useDarkMode} from './components/DarkMode';
import './App.css';

function App () {
  return (
    <div>
      <PlayerCard/>
      <Navbar/>
    </div>
  );
}

export default App;
