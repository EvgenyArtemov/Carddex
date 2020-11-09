import React from 'react';
import Modal from '../../Modal';

interface ErrorState {
    children: React.ReactElement<any> | string;
}

const ErrorModal = (props: ErrorState) => {
    return (
        <Modal modalName="error" modalHeader="Ошибка" successButtonLabel="Ок">
            {props.children}
        </Modal>
    );
};

export default ErrorModal;
