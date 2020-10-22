import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { InputNumber } from 'primereact/inputnumber';
import './AutoUpdate.scss';

export const AutoUpdate = () => {
    const [autoUpdate, setAutoUpdate] = useState(true);
    const [interval, setInterval] = useState(10);
    return (
        <section className="monitoring-params__content">
            {/* <div className="content__header">
                <h2>Автообновление</h2>
            </div> */}
            <div className="content__items">
                <span>Включено?</span>
                <form>
                    <InputSwitch checked={autoUpdate} onChange={(e) => setAutoUpdate(e.value)} />
                </form>
            </div>
            <div className="content__items">
                <span>Количество событий</span>
                <form>
                    <InputNumber
                        id="stacked"
                        value={interval}
                        onValueChange={(e) => setInterval(e.value)}
                        showButtons
                        mode="decimal"
                    />
                </form>
            </div>
        </section>
    );
};
