import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

class View extends React.Component {
    render () {
        return (
            <div>
                <Navbar href={`/projects/${this.props.project.year}/${this.props.project.type}/selector`} />
                <div style={{marginTop: "1rem", marginBottom: "1rem"}} className="container">
                    <img style={{width: "inherit"}} src={this.props.project.img} alt={this.props.project.title} />
                    <main>
                        <section>
                            <h1>{this.props.project.title}</h1>
                            <article>
                                {this.props.project.description.map((val, i) => {
                                    // if we show html directly, occurres XSS vulnerability.
                                    // So following codes just shows h2-h6 and p tags.
                                    switch (val.tag) {
                                        case 1: return <h2 key={i}>{val.text}</h2>;
                                        case 2: return <h3 key={i}>{val.text}</h3>;
                                        case 3: return <h4 key={i}>{val.text}</h4>;
                                        case 4: return <h5 key={i}>{val.text}</h5>;
                                        case 5: return <h6 key={i}>{val.text}</h6>;
                                        default: return <p key={i}>{val.text}</p>;
                                    }
                                })}
                            </article>
                        </section>
                        {((f) => {
                            if (f.length) {
                                return (
                                    <footer>
                                        <h2>Emeği Geçenler</h2>
                                        <ul>
                                            {f.map((val, i) => (
                                                <li key={i}>{val}</li>
                                            ))}
                                        </ul>
                                    </footer>
                                );
                            }
                        })(this.props.project.footer)}
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default View;