import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleDarkMode = () => {
        setIsDarkMode((prevValue) => !prevValue);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });

    return (
        <header className='header'>
            <div className='container header__container'>
                <h1 className='header__title'>Where in the world?</h1>
                <button onClick={handleDarkMode} className='header__btn'>
                    <FontAwesomeIcon
                        className='header__btn-icon'
                        icon={faMoon}
                    />
                    Dark Mode
                </button>
            </div>
        </header>
    );
};

export default Header;
