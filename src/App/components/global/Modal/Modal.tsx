import React, { useEffect, useRef, useCallback } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import Draggable from 'react-draggable';
import { Close } from 'App/../assets/images/bx-x';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import currentPath from 'utils/currentPath/currentPath';
import { ModalProps } from 'App/components/global/Modal/modalTypes';
import { ModalWarning } from 'App/../assets/images/modal-warning';
import { ModalDelete } from 'App/../assets/images/modal-delete';
import { ModalError } from 'App/../assets/images/modal-error';
import { ModalInfo } from 'App/../assets/images/modal-info';
import { Edit } from 'App/../assets/images/edit_button';
import './Modal.scss';

const Modal = (props: ModalProps) => {
    const location = useLocation();
    const history = useHistory();
    const defaultPath = location.pathname.replace(`/${props.modalName}`, '');
    const modalPath = `${defaultPath}/${props.modalName}`;
    const modal = useRef<HTMLDivElement>(null);
    const closeModal = useCallback(() => {
        if (modal.current) {
            modal.current.classList.remove('visible');
        }

        setTimeout(() => {
            history.push(defaultPath);
        }, 300);
    }, [modal, history, defaultPath]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.keyCode === 27 && modal.current) {
                closeModal();
            }
        };

        document.addEventListener('keydown', onKeyDown, false);

        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [modal, closeModal]);

    useEffect(() => {
        if (modalPath === currentPath() && modal.current) {
            modal.current.classList.add('visible');
        }
    });

    return (
        <Route exact path={modalPath}>
            <div ref={modal} className="modal-wrapper">
                <Draggable bounds="parent" handle="strong">
                    <div
                        className={`modal${
                            props.modalName === 'add' || props.modalName === 'edit' || props.modalName === 'timetable'
                                ? ' dialog-modal'
                                : ' alert-modal'
                        }`}>
                        <strong className="modal__header modal-header">
                            {props.modalIcon && (
                                <div className={`modal-header__icon ${props.modalIcon}`}>
                                    {props.modalName === 'add' && <ModalInfo />}
                                    {props.modalName === 'edit' && <Edit />}
                                    {props.modalName === 'timetable' && <Edit />}
                                </div>
                            )}
                            <span className="modal-header__label p--md--bold">{props.modalHeader}</span>
                            <div className="modal-header__toggler" onClick={closeModal}>
                                <Close />
                            </div>
                        </strong>
                        <div className="modal__body">
                            {props.modalName === 'add' ||
                            props.modalName === 'edit' ||
                            props.modalName === 'timetable' ? (
                                props.children
                            ) : (
                                <>
                                    <div className={`modal__body-icon ${props.modalName}`}>
                                        {props.modalName === 'error' && <ModalError />}
                                        {props.modalName === 'warning' && <ModalWarning />}
                                        {props.modalName === 'delete' && <ModalDelete />}
                                        {props.modalName === 'info' && <ModalInfo />}
                                    </div>
                                    <div className="modal__body-info p--md--normal">{props.children}</div>
                                </>
                            )}
                        </div>
                        <div className="modal__footer modal-footer">
                            <div className="modal-footer__content">
                                {props.successButtonLabel && (
                                    <Buttons
                                        name="Success"
                                        label={props.successButtonLabel}
                                        typical
                                        onPress={props.onSuccessClick}
                                    />
                                )}
                                {props.denyButtonLabel && (
                                    <Buttons
                                        name="Deny"
                                        label={props.denyButtonLabel}
                                        danger
                                        onPress={props.onDenyClick}
                                    />
                                )}
                                {props.cancelButtonLabel && (
                                    <Buttons
                                        name="Cancel"
                                        label={props.cancelButtonLabel}
                                        typical
                                        onPress={props.onCancelClick}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        </Route>
    );
};

export default Modal;
