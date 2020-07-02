import React from 'react';

import './card.component.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="person" src={`https://robohash.org/${props.person.id}?set=set5&size=200x180`}/>
        <h3>{props.person.name}</h3>
        <table>
            <tr>
                <th>Email: </th><td> {props.person.email} </td>
            </tr>
            <tr>
                <th>Phone: </th><td> {props.person.phone}</td>
            </tr>
            <tr>
                <th>City: </th><td> {props.person.address.city}</td>
            </tr>
        </table>
    </div>
);