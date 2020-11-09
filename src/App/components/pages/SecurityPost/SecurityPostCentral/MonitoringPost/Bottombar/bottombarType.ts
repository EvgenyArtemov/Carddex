export interface BottombarState {
    isOpen: boolean;
    icon: string;
    bottombarToggler: () => void;
    bottomTrigger?: () => void;
    bottombarName?: string;
    selectedEntry?: any;
    children?: JSX.Element;
}
