import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { State } from '../../../../../../redux/store';
import { NavLink } from 'react-router-dom';
import { SideNavIcon } from '../../SideNavIcon';

interface SublinkState {
    id: number;
}

const SubLink = (props: SublinkState) => {
    const sideNavState = useSelector((state: State) => state.sideNav[props.id].linkSubLink, shallowEqual);

    return (
        <div className="submenu">
            {sideNavState?.map((index) => {
                return (
                    <NavLink
                        activeClassName="active-page"
                        to={index.sublinkUrl}
                        className="sub-link"
                        key={index.sublinkName}
                    >
                        <li className="subparagraph">
                            <SideNavIcon linkName={index.sublinkName} />
                            <div className="list-name">
                                <div className="list-name__title">
                                    <div className="p--md--normal">{index.sublinkName}</div>
                                </div>
                            </div>
                        </li>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default SubLink;
