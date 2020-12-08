import React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
    render () {
        if (this.props.choice.year && this.props.choice.type) {
            return (
                <div>
                    {this.props.projects.map((val, i) => (
                        <p key={i}>{val.year + ' - ' + val.type + ' - ' + val.title}</p>
                    ))}
                </div>
            );
        } else return null;
    }
}

const mapStateToProps = state => {
    return { choice: state.choice, projects: state.projects };
};

export default connect(mapStateToProps)(Main);