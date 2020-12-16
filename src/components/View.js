import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

class View extends React.Component {
    render () {
        return (
            <div>
                <Navbar href={`/projects/${this.props.project.year}/${this.props.project.type}`} />
                <main style={{marginTop: "1rem", marginBottom: "1rem"}} className="container">
                    <img style={{width: "inherit"}} src={this.props.project.img} alt={this.props.project.title} />
                </main>
                <Footer />
            </div>
        );
    }
}

export default View;