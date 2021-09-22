import React, {useState, useEffect, useRef} from "react";
import { CSSTransition } from 'react-transition-group';
import cart from "../../images/cart/cart-1.jpg";
import "./Header.scss";
import { NavLink } from 'react-router-dom';
import AddService from "../modals/AddService";
import DownloadForm from "../modals/DownloadForm";

const HiddenMenu = (props) => {
    const ref = useRef();
    const ref2 = useRef();
    const [isAdd, setIsAdd] = useState(false);
    const [isDownload, setIsDownload] = useState(false);
    return (
        <CSSTransition
            in={props.isMenuOpen}
            timeout={400}
            unmountOnExit
            className="hidden_nav"
        >
            <div className="hidden-nav">
                <div className="hidden-nav-menu">
                    <div className="hidden-nav-menu-top">
                        <div className="close"></div>
                        <a className="logo-link" href="/"><div className="logo"></div></a>
                    </div>
                    <p className="hidden-menu">Меню</p>
                    <div className={`menu ${props.isSearchClicked ? "hide" : ""}`}>
                        <NavLink
                            exact to="/"
                            className="menu__item"
                            activeClassName="menu__item--active"
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to='/catalogue'
                            className="menu__item"
                            activeClassName="menu__item--active"
                        >
                            Каталог услуг
                        </NavLink>
                        <NavLink
                            to='/help'
                            className="menu__item"
                            activeClassName="menu__item--active"
                        >
                            Помощь
                        </NavLink>
                    </div>
                    <div className="showmore header-download" onClick={() => setIsDownload(true)}>СКАЧАТЬ ПРИЛОЖЕНИЕ</div>
                    <DownloadForm ref={ref} isOpen={isDownload} setIsOpen={setIsDownload} />
                    <AddService ref={ref2} isAdd={isAdd} setIsAdd={setIsAdd} />
                    <div className="btn" onClick={() => { setIsAdd(true) }}>у меня свой сервис</div>
                </div>
            </div>
        </CSSTransition>
    );
}

export default HiddenMenu;