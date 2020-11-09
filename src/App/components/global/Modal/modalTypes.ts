export interface ModalProps {
    modalName: string;
    modalHeader: string;
    modalClassName?: string;
    modalIcon?: string;
    successButtonLabel?: string;
    onSuccessClick?: () => void;
    denyButtonLabel?: string;
    onDenyClick?: () => void;
    cancelButtonLabel?: string;
    onCancelClick?: () => void;
    children?: React.ReactElement<any> | string;
}
