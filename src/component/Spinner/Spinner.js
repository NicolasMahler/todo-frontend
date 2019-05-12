import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
    return (
        <div class="wrapper" style={{...props.transitionStyles[props.state]}}>
            <div class="ball ball-1"></div>
            <div class="ball ball-2"></div>
            <div class="ball ball-3"></div>
        </div>
    )
}

export default Spinner;