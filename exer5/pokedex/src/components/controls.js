import React from 'react'
import leftArrow from './left.png'
import rightArrow from './right.png'
import styles from './styles/controls.module.css'

// fix appearance on the buttons later so no margins between them and img
function Controls({ onPrevClick, onNextClick }) {
    return (
        <div>
            <button className={styles.changeButtons} onClick={onPrevClick}>
                <img src={leftArrow} style={{ width: '70px'}}/>
            </button>
            <button className={styles.changeButtons} onClick={onNextClick}>
                <img src={rightArrow} style={{ width: '70px', margin: '0px'}}/>
            </button>
        </div>
    );
}

export default Controls;