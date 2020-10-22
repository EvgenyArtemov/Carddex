export interface SidebarState {
    isOpen: boolean;
    sidebarToggler: () => void;
    icon: string;
    sidebarName?: string;
    selectedEntry?: any;
    children?: JSX.Element;
}
