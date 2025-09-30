import React from 'react';
import left from './left.png';
import right from './right.png';
import './styles/controls.css';

// fix appearance on the buttons later so no margins between them
function Controls({ onPrevClick, onNextClick }) {
    return (
        <div id="change-buttons">
            <button className="arrow-button" onClick={onPrevClick}>
                <img src={left} style={{ width: '70px'}}/>
            </button>
            <button className="arrow-button" onClick={onNextClick}>
                <img src={right} style={{ width: '70px', margin: '0px'}}/>
            </button>
        </div>
    );
}

export default Controls;