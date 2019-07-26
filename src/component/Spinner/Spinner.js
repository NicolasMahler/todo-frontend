import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
    return (
        <div className="wrapper" style={{...props.transitionStyles[props.state]}}>
            <div className="ball ball-1"></div>
            <div className="ball ball-2"></div>
            <div className="ball ball-3"></div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Spinner;