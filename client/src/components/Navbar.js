import React from 'react';
import useDarkMode from './DarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className = 'navbar'>
            <h1>Players</h1>
            <div className='dark-mode_toggle'>
                <div onClick={toggleMode}
                className={darkMode === 'dark' ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default Navbar;