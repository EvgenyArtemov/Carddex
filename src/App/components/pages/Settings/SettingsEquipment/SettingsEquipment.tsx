import React, { useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { State } from 'App/../redux/store';
import {
    settingsEquipmentToggleSidebar,
    settingsEquipmentToggleBar
} from 'redux/Settings/SettingsEquipment/settingsEquipmentActions';
import { Toolbar } from 'App/components/global/Toolbar/Toolbar';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import { Sidebar } from 'App/components/global/Sidebar/Sidebar';
import { TabBar } from 'App/components/global/TabBar/TabBar';
import { Tab } from 'App/components/global/TabBar/Tab/Tab';
import { SettingsEquipmentTable } from './SettingsEquipmentTable/SettingsEquipmentTable';
import { TabGeneral } from './TabGeneral/TabGeneral';
import { TabModules } from './TabModules/TabModules';
import { TabPassages } from './TabPassages/TabPassages';
import './SettingsEquipment.scss';

const SettingsEquipment = () => {
    const dispatch = useDispatch();
    const { sidebarOpened, toggleBar } = useSelector((state: State) => state.settings.settingsEquipment, shallowEqual);
    const pageWrapper = useRef<HTMLDivElement>(null);

    return (
        <div ref={pageWrapper} className="page settings-equipment">
            <Toolbar>
                <section className="toolbar__section">
                    <Buttons name="Filter" size="m" typical onPress={() => console.log('Pressing first button')} />

                    <Buttons
                        name="QuickFilter"
                        size="m"
                        typical
                        onPress={() => console.log('Pressing second button')}
                    />
                </section>
            </Toolbar>

            <section className="page__wrapper">
                <SettingsEquipmentTable />

                <Sidebar
                    sidebarName="Данные об оборудовании"
                    icon="Events"
                    isOpen={sidebarOpened}
                    sidebarToggler={() => dispatch(settingsEquipmentToggleSidebar())}
                    sidebarTrigger={() => dispatch(settingsEquipmentToggleBar())}>
                    <TabBar trigger={toggleBar}>
                        <Tab header="Общие" index={0}>
                            <TabGeneral />
                        </Tab>

                        <Tab header="Модули" index={1}>
                            <TabModules />
                        </Tab>

                        <Tab header="Проходы" index={2}>
                            <TabPassages />
                        </Tab>
                    </TabBar>
                </Sidebar>
            </section>
        </div>
    );
};

export default SettingsEquipment;
