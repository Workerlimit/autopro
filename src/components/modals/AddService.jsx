import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Order from "../order/Order";

const AddService = (props) => {
    // const ref = useRef();
    // const handleClickOutside = (e) => {
    //     if (!ref.current || !ref.current.contains(e.target)) {
    //         props.setIsAdd(false);    
    //     }
    //     return;
    // }
    // useEffect(() => {
    //     if (props.isAdd) {
    //         document.addEventListener('mousedown', handleClickOutside);
    //     } else {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     }
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     }
    // }, [props.isAdd])
    return (
        <CSSTransition
                in={props.isAdd}
                timeout={200}
                classNames="popup-order"
                unmountOnExit
            >
                <div className="popup-order" ref={props.ref}>
                    <Order isAddOpen={props.isAdd} setIsAddOpen={props.setIsAdd}/>
                </div>
            </CSSTransition>
    );
}

export default AddService;