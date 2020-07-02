import React from 'react';

import { Card } from '../card/card.component';

import './card-lists.sytles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.persons.map(person => (
            <Card key={person.id} person={person}/>
        ))}
    </div>
);