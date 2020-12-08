import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './app/store';
import Choose from './components/Choose';
import Main from './components/Main';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Choose />
            <Main />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);