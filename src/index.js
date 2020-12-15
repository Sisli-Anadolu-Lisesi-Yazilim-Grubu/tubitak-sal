import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import store from './app/store';
import Choose from './components/Choose';
import Main from './components/Main';
import Error from './components/Error';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Choose} exact />
                    <Route path='/projects' component={Main} />
                    <Route render={() => <Error type='PAGE_NOT_FOUND' />} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);