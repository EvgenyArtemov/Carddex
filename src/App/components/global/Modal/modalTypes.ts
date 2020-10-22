import { ButtonAppearances } from '@atlaskit/button';

export interface ModalProps {
    modalName: string;
    modalHeader: string;
    modalIcon?: string;
    modalClassName?: string;
    modalUuidEvent?: string;
    successButtonLabel?: string;
    successButtonAppearance?: ButtonAppearances;
    successButtonHidden?: boolean;
    declineButtonHidden?: boolean;
    declineButtonLabel?: string;
    declineButtonAppearance?: ButtonAppearances;
    onSuccessClick?: () => void;
}
