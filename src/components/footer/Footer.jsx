import React, {useState, useRef} from "react";
import "./Footer.scss";
import DownloadForm from "../modals/DownloadForm";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="logo"></div>
                    <div className="white-line"></div>
                    <div className="top-btn"></div>
                </div>
                <div className="footer-content">
                    <div className="footer__menu">
                        <div className="footer__title">Меню</div>
                        <div className="footer__menu-content">
                            <a className="footer__menu-content-item">Главная</a>
                            <a className="footer__menu-content-item">Каталог услуг</a>
                            <a className="footer__menu-content-item">Помощь</a>
                        </div>
                    </div>
                    <div className="footer-content__whiteline"></div>
                    <div className="action">
                        <div className="action__content">
                            <div className="action__title">У вас имеется центр сервиса?</div>
                            <div className="action__text">Оставьте свою почту для добавления своих услуг в нашей платформе</div>
                            <input className="action__input input" placeholder="Введите почту"></input>
                        </div>
                        <div className="action__btn">
                            <div className="btn">отправить</div>
                        </div>
                    </div>
                </div>
                <div className="download footer-download" onClick={() => {setIsOpen(true)}}>СКАЧАТЬ ПРИЛОЖЕНИЕ</div>
            </div>
            <DownloadForm isOpen={isOpen} setIsOpen={setIsOpen} ref={ref}/>
        </div>
    );
}

export default Footer;