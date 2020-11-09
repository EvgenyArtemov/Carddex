// @ts-nocheck
import React, { useState } from 'react';
import './Tabs.scss';

export const Tabs = (props: any) => {
    const [activeTab, setActiveTab] = useState(0);
    const onTabClick = (index: any) => {
        setActiveTab(index);
    };
    const childrens = React.Children.toArray(props.children);

    return (
        <>
            <div className="tabs">
                {childrens.map((child: any, index: number) => {
                    return (
                        <div
                            onClick={() => onTabClick(index)}
                            key={index}
                            className={`tab ${activeTab === index ? 'active' : ''}`}
                        >
                            {child.props.header}
                        </div>
                    );
                })}
            </div>
            <div className="tab__content">
                {childrens.map((child: any, tabIndex: any) => {
                    return React.cloneElement(child, { activeTab, tabIndex, key: tabIndex });
                })}
            </div>
        </>
    );
};
