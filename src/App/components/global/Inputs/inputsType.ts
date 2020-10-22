export interface InputsType {
    name: string;
    onInputChange: (property: string) => void;
    type: string;
    value: string;
    required?: boolean;
    error?: boolean;
    label?: string;
    placeholder?: string;
    classNmae?: string;
    icon?: boolean;
    validation?: string;
    validationTitle?: string;
    validationWarning?: (property: string) => void;
    autoFocus?: boolean;
}
