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
            noFilterProj: filterProjects(this.props.projects, this.props.year, this.props.type),
            projects: filterProjects(this.props.projects, this.props.year, this.props.type),
        };

        this.search = this.search.bind(this);
    }

    search (e) {
        const q = e.currentTarget.value;
        
        if (q) {
            let arr = [];

            this.state.noFilterProj.forEach(val => {
                if (val.title.toLowerCase().includes(q.toLowerCase()))
                    arr.push(val);
            });

            this.setState({ projects: arr });
        } else this.setState({ projects: this.state.noFilterProj });
    }

    render () {
        return (
            <div>
                <Navbar href="/" />
                <main className="project-selector">
                    <header className="project-selector-head">
                        <h4>{this.props.year + ' / ' + this.props.type}</h4>
                        <div className="sal-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb" className="bi bi-search" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                            <input onChange={this.search} type="search" placeholder="Ara..." />
                        </div>
                    </header>
                    <ul className="project-preview-list">
                        {this.state.projects.map((val, i) => (
                            <Link key={i} to={`/projects/${val.year}/${val.type}/${val.hash}`}>
                                <li className="project-preview">
                                    <div className="project-preview-layout">
                                        <div>
                                            <div className="middle-wrapper">
                                                <div className="middle">{val.title}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="middle-wrapper">
                                                <div className="middle">
                                                    <img className="img-preview" src={val.img} alt="preview" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
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