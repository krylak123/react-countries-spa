import React, { useEffect } from 'react';

import Header from './Header';

const App = () => {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
    }, []);

    return <Header />;
};

export default App;
