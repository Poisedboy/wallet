import React from 'react';
import { useNavigate } from 'react-router-dom';
import './modal.css';

const Modal = ({ title, isOpen, onClose, children }) => {
    const overlayRef = React.useRef(null);
    const navigate = useNavigate();

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) {
            onClose();
            navigate('/')
        };
    };

    return (
        isOpen ? <div className="modal">
            <div
                className="modal__overlay"
                onClick={handleOverlayClick}
                ref={overlayRef}
            />
            <div className="modal__box">
                <div className="modal__close" onClick={onClose}>
                    <ion-icon name="close-circle-outline"></ion-icon>
                </div>
                <div className="modal__title">
                    {title}
                </div>
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div> : null
    )
};

export default Modal;