import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import StartPage from '../pages/StartPage';
import DetailPage from '../pages/DetailPage';

const Content = () => {
    return (
        <Switch>
            <Route exact path='/' component={StartPage} />
            <Route exact path='/country/:code' component={DetailPage} />
            <Redirect to='/' />
        </Switch>
    );
};

export default Content;
