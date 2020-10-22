export interface BottombarState {
    isOpen: boolean;
    icon: string;
    sidebarToggler: () => void;
    bottombarName?: string;
    selectedEntry?: any;
    children?: JSX.Element;
}