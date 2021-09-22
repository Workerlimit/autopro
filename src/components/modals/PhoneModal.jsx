import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const PhoneModal = (props) => {
    const ref = useRef();
    const handleClickOutside = (e) => {
        if (!ref.current || !ref.current.contains(e.target)) {
            props.setIsPhone(false);    
        }
        return;
    }
    useEffect(() => {
        if (props.isPhone) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [props.isPhone])
    return (
        <CSSTransition
            in={props.isPhone}
            timeout={200}
            classNames="phone-popup"
            unmountOnExit
        >
            <div className="phone-popup" ref={props.ref}>
                <div className="phone-popup__content">
                    <div className="phone-popup__text">+7 (777) 777 77 77</div>
                </div>
            </div>
        </CSSTransition>
    );
}

export default PhoneModal;
