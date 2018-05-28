import React from 'react';

const Date = ({ id, description, clickHandler }) => (
    <li>
        {id} - {description} -{' '}
        <a name={id} onClick={clickHandler} href="#">
            Edit
        </a>{' '}
        | <a href="#">...</a>
    </li>
);

export default Date;
