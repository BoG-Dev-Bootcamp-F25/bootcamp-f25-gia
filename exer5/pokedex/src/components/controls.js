import React from 'react'
import leftArrow from './left.png'
import rightArrow from './right.png'

// fix appearance on the buttons later so no margins between them and img refs
function Controls({ onPrevClick, onNextClick }) {
    return (
        <div id="change-buttons"
        style = {{ margin: '10px' }}>
            <button class="arrow-button" style={{ border: 'none', background: 'white', margin: '5px' }} onClick={onPrevClick}>
                <img src={leftArrow} style={{ width: '70px'}}/>
            </button>
            <button class="arrow-button" style={{ border: 'none', background: 'white', margin: '5px' }} onClick={onNextClick}>
                <img src={rightArrow} style={{ width: '70px', margin: '0px'}}/>
            </button>
        </div>
    );
}

export default Controls;