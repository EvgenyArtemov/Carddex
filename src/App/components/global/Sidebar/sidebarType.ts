export interface SidebarState {
    isOpen: boolean;
    sidebarToggler: () => void;
    icon: string;
    sidebarTrigger?: () => void;
    sidebarName?: string;
    selectedEntry?: any;
    children?: JSX.Element;
}
