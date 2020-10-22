import React, { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import './GeneralPage.scss';

export const GeneralPage = () => {
    const [quantity, setQuantity] = useState(50);
    return (
        <section className="monitoring-params__content">
            {/* <div className="content__header">
                <h2>Общее</h2>
            </div> */}
            <div className="content__items">
                <span>Количество событий</span>
                <form>
                    <InputNumber
                        id="stacked"
                        value={quantity}
                        onValueChange={(e) => setQuantity(e.value)}
                        showButtons
                        mode="decimal"
                    />
                </form>
            </div>
        </section>
    );
};
