import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import './Category.css';

const transitionStyles = {
    entering: { opacity: '1' },
    entered: { opacity: '1' },
    exiting: { opacity: '0' },
    exited: { opacity: '0' },
}

const clickedTransitionStyles = {
    entering: { opacity: '0', transform: 'translateX(-150px)' },
    entered: { opacity: '1', },
    exiting: { opacity: '0' },
    exited: { opacity: '0', display: 'none' },
}

export default function Category({id, name}) {

    const [clicked, setClicked] = useState(false)

    return (
        <section className={!clicked ? "global__card category__card" : "global__card category__card clicked"} 
            id={id} 
            onClick={() => setClicked(!clicked)}>
            <Transition in={!clicked} timeout={300} appear={true}>
            {state => 
                <div className="category__nameContainer" style={{...transitionStyles[state]}}>
                    <h3 className="category__name">{name}</h3>
                </div>
            }
            </Transition>
            <Transition in={clicked} timeout={1000} appear={true}>
                {state => 
                    <div className="category__nameContainer--clicked" style={{...clickedTransitionStyles[state]}}>
                        <h3 className="category__name--clicked">{name}</h3>
                    </div>
                }
            </Transition>
        </section>
    )
};

