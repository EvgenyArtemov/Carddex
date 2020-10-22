import React, { useEffect, FC, useRef, useCallback } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import Draggable from 'react-draggable';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { Buttons } from 'App/components/global/Buttons/Buttons';
import currentPath from 'utils/currentPath/currentPath';
import { ModalProps } from 'App/components/global/Modal/modalTypes';
import { ReactComponent as Attention } from '../../../../assets/images/bx-attention.svg';
import { ReactComponent as Warning } from '../../../../assets/images/bx-warning.svg';
import { ReactComponent as Danger } from '../../../../assets/images/bx-danger.svg';
import { ReactComponent as Info } from '../../../../assets/images/bx-info.svg';
import { ReactComponent as CheckMark } from '../../../../assets/images/bx-check.svg';
import { ReactComponent as Edit } from '../../../../assets/images/edit_button.svg';
import './Modal.scss';

const Modal: FC<ModalProps> = (props) => {
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

    // const modalClickOutside = (e: React.SyntheticEvent) => {
    //     const checkingElement = Array.prototype.slice.call(modal.current?.querySelectorAll('*'));
    //     if (!checkingElement.includes(e.target)) {
    //         closeModal();
    //     }
    // };

    /* MODAL ICON COLOR */
    const attentionColor = {
        fill: '#ffcc00'
    };
    const warningColor = {
        fill: '#ff0000'
    };
    const okColor = {
        fill: '#20CD32'
    };
    const regularColor = {
        fill: '#1d68d9'
    };

    return (
        <Route exact path={modalPath}>
            <div ref={modal} /*onClick={modalClickOutside}*/ className={`modal-wrapper ${props.modalClassName}`}>
                <Draggable bounds="parent">
                    <div className="modal">
                        <div className="modal__header modal-header">
                            {props.modalIcon && (
                                <div className="modal-header__icon">
                                    {props.modalIcon === 'Attention' ? (
                                        <Attention style={attentionColor} />
                                    ) : props.modalIcon === 'Warning' ? (
                                        <Warning style={warningColor} />
                                    ) : props.modalIcon === 'Danger' ? (
                                        <Danger style={warningColor} />
                                    ) : props.modalIcon === 'Info' ? (
                                        <Info style={regularColor} />
                                    ) : props.modalIcon === 'CheckMark' ? (
                                        <CheckMark style={okColor} />
                                    ) : props.modalIcon === 'Edit' ? (
                                        <Edit style={regularColor} />
                                    ) : null}
                                </div>
                            )}
                            <span className="modal-header__label">{props.modalHeader}</span>
                            <div className="modal-header__toggler" onClick={closeModal}>
                                <CrossIcon label="Закрыть" />
                            </div>
                        </div>
                        <div className="modal__body">{props.children}</div>
                        <div className="modal__footer modal-footer">
                            <div className="modal-footer__content">
                                {!props.successButtonHidden && (
                                    <Buttons name="Save" label="Применить" active onPress={props.onSuccessClick} />
                                )}
                                {!props.declineButtonHidden && (
                                    <Buttons name="Cancel" label="Отмена" active onPress={closeModal} />
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
