import React from 'react';
import Avatar from '@atlaskit/avatar';
import './HeaderProfile.scss';
import { HeaderProfileProps } from './headerProfileTypes';
import user from 'App/../assets/images/user.png';
import { ArrowDrop } from 'App/../assets/images/arrowDrop';

export const HeaderProfile = (props: HeaderProfileProps) => {
    return (
        <button className="header__content__user-info" onClick={props.click}>
            <div className="header__content__user__separator" />
            <span className="header__content__user__name">
                <div className="p--md--normal">Администратор</div>
            </span>
            <Avatar appearance="circle" src={user} size="large" presence="online" />
            <div className={props.isOpened ? 'list-name__icon turn' : 'list-name__icon'}>
                <ArrowDrop />
            </div>
        </button>
    );
};
