import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Sidebar } from 'App/components/global/Sidebar/Sidebar';
import { SideFilter } from 'App/components/global/SideFilter/SideFilter';
import { Events } from './Events/Events';
import { MonitoringPost } from './MonitoringPost/MonitoringPost';
import {
    securityPostCentralToggleSidebar,
    securityPostCentralToggleBar
} from '../../../../../redux/SecurityPost/SecurityPostCentral/securityPostCentralAction';
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
                    <Buttons name="Filter" size="m" typical active={sideFilter} onPress={toggleSideFilter} />
                </section>
                <section className="toolbar__section">
                    <Buttons name="LetIn" size="m" typical onPress={() => console.log('Click!')} />
                    <Buttons name="Stop" size="m" typical onPress={() => console.log('Click!')} />
                    <Buttons name="Control" size="m" typical onPress={() => console.log('Click!')} />
                </section>
                <section className="toolbar__section">
                    <Buttons name="LetInMany" size="m" typical onPress={() => console.log('Click!')} />
                    <Buttons name="LetInOne" size="m" typical onPress={() => console.log('Click!')} />
                    <Buttons name="LetOutOne" size="m" typical onPress={() => console.log('Click!')} />
                    <Buttons name="LetOutMany" size="m" typical onPress={() => console.log('Click!')} />
                </section>
                <section className="toolbar__section toolbar__section--alarm">
                    <Buttons name="Bell" size="m" danger onPress={() => console.log('Click!')} />
                    <Buttons name="BlockUnLock" size="m" danger onPress={() => console.log('Click!')} />
                    <Buttons name="SecurityCall" size="m" danger onPress={() => console.log('Click!')} />
                </section>
            </Toolbar>
            <section className="page__wrapper">
                <MonitoringPost />
                <Sidebar
                    sidebarName="События"
                    icon={sidebarOpened ? 'ArrowRight' : 'ArrowLeft'}
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(securityPostCentralToggleSidebar())}
                    sidebarTrigger={() => dispatch(securityPostCentralToggleBar())}>
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
