import React from 'react';

class View extends React.Component {

    render () {
        return (
            <p>{this.props.project.title}</p>
        );
    }
}

export default View;