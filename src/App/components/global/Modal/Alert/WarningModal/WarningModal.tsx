import React from 'react';
import Modal from '../../Modal';

interface WarningState {
    children: React.ReactElement<any> | string;
}

const WarningModal = (props: WarningState) => {
    return (
        <Modal modalName="warning" modalHeader="Предупреждение" successButtonLabel="Ок">
            {props.children}
        </Modal>
    );
};

export default WarningModal;
