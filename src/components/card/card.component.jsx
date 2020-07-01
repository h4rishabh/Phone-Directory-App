import React from 'react';

import './card.component.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set5&size=200x180`}/>
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>
);