import React from 'react';
import { useDarkMode } from './DarkMode';
import styled from 'styled-components';


const DarkButton = styled.button`
    margin-left: 20%;
`

const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    padding-left: 10%;
    margin: 2%;
`
const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggle = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return (
        <nav className = 'Navbar'>
            <Bar>
                <button>Home</button>
                <button>Players</button>
                <button>Stats</button>
                <button>News</button>
                <DarkButton onClick={toggle}>Dark Mode {darkMode ? "On" : "Off"}</DarkButton>
            </Bar>    
        </nav>
    );
};

export default Navbar;