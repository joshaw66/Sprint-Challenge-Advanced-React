import React from 'react';
import { Player } from './components/PlayerCard';
import { useDarkMode } from './components/DarkMode';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Player/>
      <Navbar/>
    </div>
  )
}

export default App;
