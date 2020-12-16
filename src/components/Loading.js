import React from 'react';

import './Loading.css';

class Loading extends React.Component {
    render () {
        return (
            <div className="loader">
                <div className="ring"></div>
            </div>
        );
    }
}

export default Loading;