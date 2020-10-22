import React from 'react';

export interface HeaderProfileProps {
    click: (event: React.MouseEvent<HTMLElement>) => void;
    isOpened: boolean;
}
