import React from 'react';
import left from './left.png';
import right from './right.png';
import './styles/controls.css';

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