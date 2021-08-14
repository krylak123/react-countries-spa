import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Content from './Content';
import Header from './Header';

const App = () => {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
    }, []);

    return (
        <>
            <Header />
            <Router>
                <Content />
            </Router>
        </>
    );
};

export default App;
