import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { filterProjects } from './../app/store_functions';
import View from './View';
import ProjectSelector from './ProjectSelector';
import Error from './Error';

class ProjectRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/projects/' + this.props.year + '/' + this.props.type + '/selector'} render={() => (
                        <ProjectSelector year={this.props.year} type={this.props.type} />
                    )} exact />
                    {filterProjects(this.props.projects, this.props.year, this.props.type).map((val, i) => (
                        <Route key={i} path={'/projects/' + val.year + '/' + val.type + '/' + val.hash} render={() => (
                            <View project={val} />
                        )} />
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

export default connect(mapStateToProps)(ProjectRouter);