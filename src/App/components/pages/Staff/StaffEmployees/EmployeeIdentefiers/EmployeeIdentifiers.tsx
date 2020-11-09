import React, { useState } from 'react';
import { Buttons } from '../../../../global/Buttons/Buttons';
import './EmployeeIdentifiers.scss';

export const EmployeeIdentifiers = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
        <div className="Employee__identifiers__wrapper">
            <div className="block">
                <div className="general">
                    <div className="number">Номер</div>
                    <div className="type">Статус</div>
                </div>
            </div>
            <div className="block">
                <div className="general">
                    <Buttons
                        name="Filter"
                        size="m"
                        typical
                        onPress={() => setOpen(!open)}
                    />
                    <div className="identifier__number">9453214569874521</div>
                    <div className="identifier__status">Постоянный</div>
                </div>
                {open && (
                    <div className="add__info">
                        <br />
                        <div>
                            Тип: <strong>Активен</strong>
                        </div>
                        <br />
                        <div>
                            Срок действия: с <strong>21.02.14</strong>
                        </div>
                        <br />
                        <div>
                            до <strong>12.03.17</strong>
                        </div>
                        <br />
                        <div>
                            Остаток проходов: <strong>16</strong>
                        </div>
                    </div>
                )}
            </div>
            <div className="block">
                <div className="general">
                    <Buttons
                        name="Filter"
                        size="m"
                        typical
                        onPress={() => setOpen2(!open2)}
                    />
                    <div className="identifier__number">9453214569874521</div>
                    <div className="identifier__status">Постоянный</div>
                </div>
                {open2 && (
                    <div className="add__info">
                        <br />
                        <div>
                            Тип: <strong>Активен</strong>
                        </div>
                        <br />
                        <div>
                            Срок действия: с <strong>21.02.14</strong>
                        </div>
                        <br />
                        <div>
                            до <strong>12.03.17</strong>
                        </div>
                        <br />
                        <div>
                            Остаток проходов: <strong>16</strong>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
