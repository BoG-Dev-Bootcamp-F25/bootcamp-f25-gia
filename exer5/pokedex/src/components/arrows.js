import React from 'react';
import left from './styles/left.png';
import right from './styles/right.png';
import './styles/arrows.css';

// fix appearance on the buttons later so no margins between them
function Controls({ onPrevClick, onNextClick }) {
    return (
        <div id="change-buttons">
            <button className="arrow-button" onClick={onPrevClick}>
                <img className="arrow" src={left}/>
            </button>
            <button className="arrow-button" onClick={onNextClick}>
                <img className="arrow" src={right}/>
            </button>
        </div>
    );
}

export default Controls;