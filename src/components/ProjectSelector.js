import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './ProjectSelector.css';
import { filterProjects } from './../app/store_functions';
import Navbar from './Navbar';
import Footer from './Footer';

class ProjectSelector extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            projects: filterProjects(this.props.projects, this.props.year, this.props.type)
        };
    }

    render () { //TODO: add search and image preview
        return (
            <div>
                <Navbar href="/" />
                <main className="project-selector">
                    <ul className="project-preview-list">
                        {this.state.projects.map((val, i) => (
                            <Link key={i} to={`/projects/${this.props.year}/${this.props.type}/${val.hash}`}>
                                <li className="project-preview">{val.title}</li>
                            </Link>
                        ))}
                    </ul>
                </main>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { projects: state.projects };
};

export default connect(mapStateToProps)(ProjectSelector);