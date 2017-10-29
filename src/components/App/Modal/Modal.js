import React from 'react';
import { arrayOf, element, func, oneOfType } from 'prop-types';
import './Modal.css';

const Modal = ({ children, closeModal }) => (
    <div className="Modal-backdrop" onClick={closeModal}>
        <div className="Modal-content">
            <div className="Modal-close" onClick={closeModal}>X</div>
            {children}
        </div>
    </div>
);
Modal.propTypes = {
    children: oneOfType([
        arrayOf(element),
        element,
    ]),
    closeModal: func,
};
Modal.defaultProps = {
    children: [],
    closeModal: () => {},
};

export default Modal;
