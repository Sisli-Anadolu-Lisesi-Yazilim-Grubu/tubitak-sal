import React from 'react';
import { connect } from 'react-redux';

class ProjectSelector extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a href='/'><button className="btn"><span style={{color: "#00005f", fontSize: "3rem"}}>&lang;</span></button></a>
                    <a className="navbar-brand" href="/">Tübitak ŞAL</a>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { projects: state.projects };
};

export default connect(mapStateToProps)(ProjectSelector);