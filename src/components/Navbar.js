import React from 'react';

class Navbar extends React.Component {
    render () {
        return (
            <nav style={{backgroundColor: "#252526"}} className="sal-navbar navbar navbar-expand-sm navbar-dark">
                <div className="float-left">
                    <a href={this.props.href}>
                        <button className="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#00f" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </button>
                    </a>
                    <a className="navbar-brand" style={{fontSize: "1.5rem"}} href="/">Tübitak ŞAL</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;