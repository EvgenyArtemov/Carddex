import React, { memo } from 'react';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { TableBottomType } from './tableBottomType';
import './TableBottomCounter.scss';

const TableBottomCounterInner = (props: TableBottomType) => {
    const onClickFirst = () => {
        props.rowNumber(1);
        props.goToRowElement();
    };

    const onClickPrevGroup = () => {
        const tableRowHeight = document.querySelector('.p-datatable-row')?.clientHeight;
        const tableheight = document.querySelector('.p-datatable-scrollable-body')?.clientHeight;
        const groupCount = Math.floor(tableheight! / (tableRowHeight! + 1));

        if (props.rowElement > groupCount) {
            props.rowNumber(props.rowElement - groupCount);
        } else {
            props.rowNumber(1);
        }

        props.goToRowElement();
    };

    const onClickPrev = () => {
        if (props.rowElement > 1) {
            props.rowNumber(props.rowElement - 1);
        }

        props.goToRowElement();
    };

    const onClickNext = () => {
        if (props.rowElement < props.tableRowCount) {
            props.rowNumber(props.rowElement + 1);
        }

        props.goToRowElement();
    };

    const onClickNextGroup = () => {
        const tableRowHeight = document.querySelector('.p-datatable-row')?.clientHeight;
        const tableheight = document.querySelector('.p-datatable-scrollable-body')?.clientHeight;
        const groupCount = Math.floor(tableheight! / (tableRowHeight! + 1));

        console.log(tableheight);

        if (props.rowElement + groupCount < props.tableRowCount) {
            props.rowNumber(props.rowElement + groupCount);
        } else {
            props.rowNumber(props.tableRowCount);
        }

        props.goToRowElement();
    };

    const onClickLast = () => {
        props.rowNumber(props.tableRowCount);
        props.goToRowElement();
    };

    return (
        <div className="table__bottom table-bottom">
            <div className="table-bottom__buttons">
                <Buttons name="LetInOne" size="sm" typical onPress={onClickFirst} />
                <Buttons name="LetInMany" size="sm" typical onPress={onClickPrevGroup} />
                <Buttons name="ArrowLeft" size="sm" typical onPress={onClickPrev} />
                <Buttons name="ArrowRight" size="sm" typical onPress={onClickNext} />
                <Buttons name="LetOutMany" size="sm" typical onPress={onClickNextGroup} />
                <Buttons name="LetOutOne" size="sm" typical onPress={onClickLast} />
            </div>
            <div className="table-bottom__label">
                <div className="p--md--bold">Записей:{props.tableRowCount}</div>
            </div>
        </div>
    );
};

export const TableBottomCounter = memo(TableBottomCounterInner);
