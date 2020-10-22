import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Sidebar } from 'App/components/global/Sidebar/Sidebar';
import { SideFilter } from 'App/components/global/SideFilter/SideFilter';
import { Events } from './Events/Events';
import { MonitoringPost } from './MonitoringPost/MonitoringPost';
import { securityPostCentralToggleSidebar } from '../../../../../redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
import SecurityPostCentralFilter from './SecurityPostCentralFilter/SecurityPostCentralFilter';
import './SecurityPostCentral.scss';

const SecurityPostCentral = () => {
    //  SideFilter logic
    const dispatch = useDispatch();
    const { sidebarOpened } = useSelector((state: State) => state.securityPost.postCentral, shallowEqual);
    const [sideFilter, setSideFilter] = useState(false);
    const toggleSideFilter = () => {
        setSideFilter(!sideFilter);
    };

    return (
        <div className="page security-post-central" aria-label="page content">
            <Toolbar>
                <section className="toolbar__section">
                    <Buttons name="Settings" size="m" onPress={toggleSideFilter} active={sideFilter} />
                </section>
                <section className="toolbar__section">
                    <Buttons name="LetIn" size="m" onPress={() => console.log('Click!')} />
                    <Buttons name="Stop" size="m" onPress={() => console.log('Click!')} />
                    <Buttons name="Control" size="m" onPress={() => console.log('Click!')} />
                </section>
                <section className="toolbar__section">
                    <Buttons name="LetInMany" size="m" onPress={() => console.log('Click!')} />
                    <Buttons name="LetInOne" size="m" onPress={() => console.log('Click!')} />
                    <Buttons name="LetOutOne" size="m" onPress={() => console.log('Click!')} />
                    <Buttons name="LetOutMany" size="m" onPress={() => console.log('Click!')} />
                </section>
                <section className="toolbar__section">
                    <Buttons name="Warning" size="m" onPress={() => console.log('Click!')} />
                    <Buttons name="Bell" size="m" onPress={() => console.log('Click!')} />
                    <Buttons name="Events" size="m" onPress={() => console.log('Click!')} />
                </section>
            </Toolbar>
            <section className="page__wrapper">
                <MonitoringPost />
                <Sidebar
                    sidebarName="События"
                    icon="Events"
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(securityPostCentralToggleSidebar())}
                >
                    <Events />
                </Sidebar>
                <SideFilter onClose={toggleSideFilter} isOpen={sideFilter} iconName="Настройки">
                    <SecurityPostCentralFilter />
                </SideFilter>
            </section>
        </div>
    );
};

export default SecurityPostCentral;
