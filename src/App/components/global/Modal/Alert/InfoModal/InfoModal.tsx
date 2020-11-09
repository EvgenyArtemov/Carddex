import React from 'react';
import Modal from '../../Modal';

interface InfoState {
    children: React.ReactElement<any> | string;
}

const InfoModal = (props: InfoState) => {
    return (
        <Modal modalName="info" modalHeader="Информация" successButtonLabel="Ок">
            {props.children}
        </Modal>
    );
};

export default InfoModal;
