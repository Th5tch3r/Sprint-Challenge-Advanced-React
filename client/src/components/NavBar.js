import React from 'react';
import {useDarkMode} from "./hooks/useDarkMode";

const NavBar = () => {
    const [ darkMode, setDarkMode ] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return(
        <nav className="navbar">
            <div className="darl-mode_toggle">
                <div
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />

            </div>

        </nav>
    )
}

export default NavBar;