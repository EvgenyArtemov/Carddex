export type SettingsEquipmentTableState = Array<TableState>

export interface TableState {
    id: string;
    equipType: string;
    equipCount: number;
    equipDital: Array<EquipDitalState>;
}

export interface EquipDitalState {
    id: string;
    equipName: string;
    equipPort: string;
    equipSpeed: number;
    equipGroup: string;
    equipPassCount: number;
    modules: [Array<EquipModulesControlState>, Array<EquipModulesIdentState>];
}

export interface EquipModulesControlState {
    id: string;
    modulesConrolName: string;
    controlArr: Array<EquipModuleControlState>;
}

export interface EquipModulesIdentState {
    id: string;
    modulesIdentName: string;
    controlArr: Array<EquipModuleIdentState>;
}

export interface EquipModuleControlState {
    id: string;
    controlModuleName: string;
}

export interface EquipModuleIdentState {
    id: string;
    identModuleName: string;
}