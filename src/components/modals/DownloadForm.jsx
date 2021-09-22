import React from "react";
import { CSSTransition } from "react-transition-group";

const DownloadForm = (props) => {
    return (
        <CSSTransition
            in={props.isOpen}
            timeout={200}
            classNames="popup"
            unmountOnExit
        >
            <div className="popup-download" ref={props.ref}>
                <div className="popup-download__body">
                    <div className="modal-close" onClick={() => { props.setIsOpen(false)}}></div>
                    <div className="error"></div>
                    <div className="content">
                        <div className="content__title">Ссылка временно не работает ...</div>
                        <div className="content__text">Будьте первыми кто узнает о готовности приложения - оставив свою почту ниже!</div>
                        <input className="input" placeholder="Ваша почта" type="email"></input>
                        <div className="btn">Отправить</div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}

export default DownloadForm;