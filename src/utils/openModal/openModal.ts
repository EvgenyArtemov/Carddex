import { History, LocationState } from 'history';

const openModal = (name: string, history: History<LocationState>) => {
    const defaultPath = window.location.pathname.replace(`/${name}`, '');
    const modalPath = `${defaultPath}/${name}`;
    history.push(modalPath);
};

export default openModal;
