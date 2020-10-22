import React, { FC } from 'react';
import Modal from '../../Modal';
import { TemplateModalProps } from '../templateModalTypes';
import './ErrorModal.scss';

const ErrorModal: FC<TemplateModalProps> = (props) => {
    return (
        <Modal modalName={props.modalName} modalHeader="Ошибка!" successButtonHidden declineButtonLabel="Ок">
            Ошибка! {props.children}
        </Modal>
    );
};

export default ErrorModal;
