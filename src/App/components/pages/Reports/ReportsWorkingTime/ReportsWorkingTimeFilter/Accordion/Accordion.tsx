import React, { useState } from 'react';
import { ArrowTick } from '../../../../../../../assets/images/arrow-tick';
import './Accordion.scss';

export const Accordion = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="accordion__wrapper">
            <div className={`accordion__header ${isOpen ? 'opened' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <h2>{props.header}</h2>
                <ArrowTick />
            </div>
            <div className={`accordion__content ${isOpen ? 'opened' : ''}`}>{props.children}</div>
        </div>
    );
};
