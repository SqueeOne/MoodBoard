import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Header from '../components/Header';
import MoodBoardPage from '../components/MoodBoardPage';
import AddMoodPage from '../components/AddMoodPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={MoodBoardPage} exact={true} />
                <Route path="/AddMoodPage" component={AddMoodPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;