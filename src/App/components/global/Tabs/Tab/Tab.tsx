// @ts-nocheck
import React from 'react';
import '../../../../../assets/styles/utils/_mixin.scss';
import './Tab.scss';

export const Tab = ({ activeTab, tabIndex, children }) => {
    const thisIsActive = activeTab === tabIndex;
    return <>{thisIsActive ? children : null}</>;
};
