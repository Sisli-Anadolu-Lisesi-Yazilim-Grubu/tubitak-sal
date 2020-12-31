import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import firebase from './app/firebase';
import store from './app/store';
import { getMobileOperatingSystem } from './app/app_funcs';
import Loading from './components/Loading';
import Choose from './components/Choose';
import Download from "./components/Download";
import Main from './components/Main';
import Error from './components/Error';

new Promise((resolve) => {
    const ref = firebase.database().ref('projects');
    ReactDOM.render(<Loading />, document.getElementById('root'));

    ref.on('value', snapshot => {
        resolve(snapshot.val());
    });
}).then((items) => {
    let projects = [];
    for (let i in items) {
        projects.push({
            year: items[i].year,
            type: items[i].type,
            title: i,
            hash: items[i].hash,
            img: items[i].img
        });
    }

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store(projects)}>
                {(() => {
                    if (getMobileOperatingSystem() !== "unknown" 
                        && new URLSearchParams(window.location.search).get('from') !== 'app')
                        return (
                            <div style={{backgroundColor: "#00005f", padding: "5px"}}>
                                <i>Mobil uygulamamız yayınlandı!</i>
                                <a className="btn btn-light ml-2" href="/download/?from=app">İndir</a>
                            </div>
                        );
                })()}
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={Choose} exact />
                        <Route path='/projects' component={Main} />
                        <Route path='/download' component={Download} exact />
                        <Route render={() => <Error type='PAGE_NOT_FOUND' />} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
});