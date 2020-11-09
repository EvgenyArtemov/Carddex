import { useRef } from 'react';

export const useSelection = (calendar: any) => {
    const period = useRef(false);
    let selectedDay: number[] = [];
    let days: number[];
    let start: number;
    let end: number;
    let click = 0;

    const clearSelection = () => {
        calendar.current.querySelectorAll('.selected').forEach((el: any) => {
            el.classList.remove('selected');
        });
    };

    const periodOn = (ev: any) => {
        if (ev.key === 'Shift' && !period.current) {
            clearSelection();
            period.current = true;
        }
    };

    const periodOff = (ev: any) => {
        if (ev.key === 'Shift' && period.current) {
            period.current = false;
        }
    };

    const selectionHandler = (ev: any) => {
        const div = ev.target.closest('div');

        if (calendar.current) {
            days = [...calendar.current.childNodes];
        }

        // Select just one item
        if (!period.current) {
            // console.log('unwanted');
            const day = +div.dataset.cell;
            clearSelection();
            div.classList.add('selected');
            if (!selectedDay.includes(day)) {
                selectedDay.push(day);
            } else {
                selectedDay = [];
                div.classList.remove('selected');
            }
        } else {
            // Select multiple items with SHIFT
            if (click === 2) {
                click = 0;
            }
            if (click === 0) {
                start = days.indexOf(div);
                div.classList.add('selected');
                click = 1;
                return;
            }

            if (click === 1) {
                end = days.indexOf(div);
                click = 2;
                days.forEach((el: any, i) => {
                    if (start < end) {
                        if (i >= start && i <= end) {
                            el.classList.add('selected');
                        }
                    }
                    if (start > end) {
                        if (i <= start && i >= end) {
                            el.classList.add('selected');
                        }
                    }
                });
            }
        }
    };
    return [selectionHandler, periodOn, periodOff];
};
