import React from 'react';
import './hero.css';
import Button from '@material-ui/core/Button';

function hero() {
    return (
        <div className="hero">
            <h1>This is just the hero section</h1>
            <Button color="primary" href="#" variant="contained">Contained</Button>
        </div>
    )
}

export default hero
