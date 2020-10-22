import React from 'react';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { TableBottomType } from './tableBottomType';
import './TableBottomCounter.scss';

const TableBottomCounter = (props: TableBottomType) => {
    return (
        <div className="table__bottom table-bottom">
            <span className="table-bottom__label">Запись:</span>

            <input
                type="number"
                onChange={props.rowNumber}
                value={props.rowElement}
                className="table-bottom__current-element"
            />

            <span className="table-bottom__divider">/</span>

            <span className="table-bottom__element-count">{props.tableRowCount}</span>

            <Buttons name="Search" size="sm" active onPress={props.goToRowElement} />
        </div>
    );
};

export default TableBottomCounter;
