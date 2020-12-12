import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getYears, getTypes } from './../app/store_functions';
import ProjectRouter from './ProjectRouter';
import Error from './Error';

class Main extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    {getYears(this.props.projects).map(val => (
                        getTypes(this.props.projects, val).map((val1, i) => (
                            <Route key={i} path={`/projects/${val}/${val1}`} render={() => (
                                <ProjectRouter year={val} type={val1} />
                            )} />
                        ))
                    ))}
                    <Route render={() => (<Error type='PAGE_NOT_FOUND' />)} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return { projects: state.projects };
};

export default connect(mapStateToProps)(Main);