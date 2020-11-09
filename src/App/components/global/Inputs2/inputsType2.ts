export interface InputsType {
    name: string;
    onInputChange: (property: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    value: string;
    required?: boolean;
    error?: boolean;
    label?: string;
    placeholder?: string;
    className?: string;
    icon?: boolean;
    validation?: string;
    validationTitle?: string;
    validationWarning?: (property: string) => void;
    autoFocus?: boolean;
}
