import React, { FC } from 'react';
import './Card.scss';

const Card: FC = (props) => (
    <div className="card">
        <div className="card__content">{props.children}</div>
    </div>
);

export default Card;
