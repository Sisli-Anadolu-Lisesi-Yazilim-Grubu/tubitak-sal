import React from 'react';
import { connect } from 'react-redux';

class ProjectSelector extends React.Component {
    render () {
        return (
            <div>
                {this.props.year + '/' + this.props.type}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { projects: state.projects };
};

export default connect(mapStateToProps)(ProjectSelector);