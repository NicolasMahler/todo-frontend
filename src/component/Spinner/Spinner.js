import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
    return (
        <div className="wrapper" style={{...props.transitionStyles[props.state]}}>
            <div className="ball ball-1"></div>
            <div className="ball ball-2"></div>
            <div className="ball ball-3"></div>
        </div>
    )
}

export default Spinner;