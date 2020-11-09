import React, { memo } from 'react';
import { TabState } from './tabbarTabType';

const TabInner = (props: TabState) => {
    return <>{props.children}</>;
};

export const Tab = memo(TabInner);
