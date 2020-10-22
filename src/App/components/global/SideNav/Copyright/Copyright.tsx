import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import './Copyright.scss';

const CopyrightInner = () => {
    const currentYear = new Date().getFullYear();
    const { sidenavOpened } = useSelector((state: State) => state.app, shallowEqual);

    return (
        <div className="copyright">
            {sidenavOpened ? (
                <>
                    <p className="p--sm--normal">
                        Copyright <b>©</b> {currentYear} Carddex.
                    </p>
                    <p className="p--sm--normal">Все права защищены</p>
                </>
            ) : (
                <>
                    <div className="copyright__lable">©</div>
                    <div className="copyright__hide">
                        <p className="p--sm--normal">Copyright © {currentYear} Carddex.</p>
                        <p className="p--sm--normal">Все права защищены</p>
                    </div>
                </>
            )}
        </div>
    );
};

export const Copyright = memo(CopyrightInner);
