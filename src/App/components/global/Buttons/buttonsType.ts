export interface ButtonsType {
    name: string;
    label?: string;
    size?: string;
    active?: boolean;
    disable?: boolean;
    danger?: boolean;
    prompt?: string;
    onPress?: (property: any) => void;
}