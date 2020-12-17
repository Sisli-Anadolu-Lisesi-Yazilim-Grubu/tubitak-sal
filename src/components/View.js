import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import loading from './../assets/img/loading.svg';

class View extends React.Component {
    constructor (props) {
        super(props);

        this.imgLoad = this.imgLoad.bind(this);
    }

    imgLoad (e) {
        e.currentTarget.previousElementSibling.remove();
        e.currentTarget.style.display = "inline";
    }

    render () {
        return (
            <div>
                <Navbar href={`/projects/${this.props.project.year}/${this.props.project.type}`} />
                <main style={{marginTop: "1rem", marginBottom: "1rem"}} className="container">
                    <img style={{width: "inherit"}} src={loading} alt="loader" />
                    <img style={{display: "none", width: "inherit"}} onLoad={this.imgLoad} src={this.props.project.img} alt={this.props.project.title} />
                </main>
                <Footer />
            </div>
        );
    }
}

export default View;