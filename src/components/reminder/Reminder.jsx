import React, { useState, useRef, useEffect } from "react";
import "./Reminder.scss";
import "../order/Order.scss";
import DownloadForm from "../modals/DownloadForm";

const Reminder = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ref = useRef();
    return (
        <div className="reminder-block">
            <div className="container">
                <div className="reminder-wrapper">
                    <div className="reminder__content">
                        <div className="reminder__title">НАПОМИНАНИЕ</div>
                        <div className="reminder__text">Ищите быстро услугу, находите контакты магазинов, оценивайте услугу</div>
                    </div>       
                    <div className="btn" onClick={() => {setIsModalOpen(true)}}>Скачать приложение</div>
                    <DownloadForm ref={ref} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
                </div>
            </div>
        </div>
    );
}

export default Reminder;