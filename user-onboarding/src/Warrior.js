import React from 'react';

export default function Warrior(props) {
    const { values } = props;
    
    return(
        <div className="warrior-container" data-cy="warriorContainer">
            <h3>{values.username}</h3>
            <p>Class: {values.warriorClass}</p>
            <p>Rally to the Cause: {values.email}</p>
        </div>
    )
}