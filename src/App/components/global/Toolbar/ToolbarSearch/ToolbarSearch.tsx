import React, { FC, useRef, ChangeEvent, useState } from 'react';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import TextField from '@atlaskit/textfield';
import { ToolbarSearchProps } from './toolbarSearchTypes';
import './ToolbarSearch.scss';

const ToolbarSearch: FC<ToolbarSearchProps> = (props) => {
    const [crossVisible, setCrossVisible] = useState(false);
    const crossRef = useRef<HTMLDivElement>(null);

    const showCross = async () => {
        await setCrossVisible(true);

        const cross = crossRef.current;
        if (cross) {
            cross.classList.add('visible');
        }
    };

    const hideCross = () => {
        const cross = crossRef.current;
        if (cross) {
            cross.classList.remove('visible');
        }

        setTimeout(() => {
            setCrossVisible(false);
        }, 300);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (value) {
            showCross();
        } else {
            hideCross();
        }

        props.onChange(e);
    };

    const onCrossClick = () => {
        hideCross();

        if (props.onCrossClick) {
            props.onCrossClick();
        }
    };

    return (
        <div className="toolbar__content__search">
            <TextField value={props.value} onChange={onChange} placeholder="Поиск"/>

            {crossVisible && (
                <div ref={crossRef} className="toolbar__content__search__cross" onClick={onCrossClick}>
                    <CrossIcon label="Очистить" />
                </div>
            )}
        </div>
    );
};

export default ToolbarSearch;
