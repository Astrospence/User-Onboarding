import React from 'react';

export default function Warrior(props) {
    const { values } = props;
    
    return(
        <div className="warrior-container">
            <h2>{values.username}</h2>
            <p>Class: {values.warriorClass}</p>
            <p>Rally to the Cause: {values.email}</p>
        </div>
    )
}