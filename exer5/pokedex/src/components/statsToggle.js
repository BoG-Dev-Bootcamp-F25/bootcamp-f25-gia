import React from "react";
import './styles/statsToggle.css';

function StatsToggle({ currentView, setView }) {
    let infoButtonClass = 'toggle-button';
    if (currentView === 'info') {
        infoButtonClass += ' active';
    }

    let movesButtonClass = 'toggle-button';
    if (currentView === 'moves') {
        movesButtonClass += ' active';
    }

    return (
        <div className="toggle-container">
            <button className={infoButtonClass} onClick={() => setView('info')}>Info</button>
            <button className={movesButtonClass} onClick={() => setView('moves')}>Moves</button>
        </div>
    )
}

export default StatsToggle;