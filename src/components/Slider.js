import React from 'react';

import './Slider.css';

class Slider extends React.Component {
    render () {
        if (this.props.img && this.props.alt 
            && this.props.img.length === this.props.alt.length) {

            return (
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {this.props.img.map((val, i) => (
                            <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={!i ? "active" : ""}></li>
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        {this.props.img.map((val, i) => (
                            <div key={i} className={"carousel-item" + (!i ? " active" : "")}>
                                <img className="d-block slider-img" src={val} alt={this.props.alt[i]}/>
                            </div>
                        ))}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            );
        } else return null;
    }
}

export default Slider;