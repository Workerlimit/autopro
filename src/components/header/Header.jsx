import React, {useState, useEffect, useRef} from "react";
import { NavLink } from 'react-router-dom';
import "./Header.scss";
import AddService from "../modals/AddService";
import HiddenMenu from "./HiddenMenu";

const Header = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref = useRef();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1020px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header-wrapper">
                    <a className="logo-link" href="/"><div className="logo"></div></a>
                    <div className={`burger_btn ${isMenuOpen ? "open" : ""}`} onClick={() => { setIsMenuOpen(!isMenuOpen); }}>
                        <span className={`${isSmallScreen ? "show" : "hide"}`}></span>
                        <div className="burger"></div>
                    </div>
                    <HiddenMenu isMenuOpen={isMenuOpen} isSearchClicked={props.isSearchClicked} />
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
                    <div className="action-block">
                        <div ref={ref} id="search" className={`search ${props.isSearchClicked ? "show" : "hide"}`} >
                            <div className="search-block" onClick={() => { props.setIsSearchClicked(true) }}></div>
                            <input className="search-block__input" placeholder="Введите название услуг" onClick={() => { props.setIsSearchClicked(true) }}></input>
                            <div className="search-block__close" onClick={() => { props.setIsSearchClicked(false) }}></div>
                        </div>
                        <div className="btn" onClick={() => { setOpen(true) }}>у меня свой сервис</div>
                    </div>
                </div>
            </div>
            <AddService isAdd={isOpen} setIsAdd={setOpen} ref={ref}/>
        </div>
    );
};

export default Header;