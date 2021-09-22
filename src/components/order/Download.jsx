import React, { useState, useRef, useEffect } from "react";
import "./Order.scss";
import DownloadForm from "../modals/DownloadForm";

const Download = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    return (
        <div className="download-form">
            <div className="download-form__img"></div>
            <div className="download-form__content">
                <div className="download-form__title">ИЛИ ...</div>
                <div className="text download-form__text">скачайте приложение для быстрого добавления услуг</div>
                <div className="btn" onClick={() => {setIsOpen(true)}}>Скачать</div>
                <div className="add-text">Спасибо что вы с нами!</div>
            </div>
            <DownloadForm isOpen={isOpen} setIsOpen={setIsOpen} ref={ref}/>
        </div>
    );
}

export default Download;