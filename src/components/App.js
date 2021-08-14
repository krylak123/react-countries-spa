import React, { useEffect } from 'react';
import GlobalStore from '../store/GlobalStore';
import { HashRouter as Router } from 'react-router-dom';

import Content from './Content';
import Header from './Header';

const App = () => {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
    }, []);

    return (
        <GlobalStore>
            <Header />
            <Router>
                <Content />
            </Router>
        </GlobalStore>
    );
};

export default App;
