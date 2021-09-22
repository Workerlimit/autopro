import React, {useState, useRef} from "react";
import Cart from "../cart/Cart"
import Reminder from "../reminder/Reminder";
import Question from "../question/Question";
import Order from "../order/Order";
import Download from "../order/Download";
import "../../style/media.scss";
import AddService from "../modals/AddService";
import i1 from "../../images/instruction/i1.png";
import i2 from "../../images/instruction/i2.jpg";
import i3 from "../../images/instruction/i3.jpg";
import DownloadForm from "../modals/DownloadForm";
import car from "../../images/first-screen-bg.png";

const FirstScreen = (props) => {
    const [isAdd, setIsAdd] = useState(false);
    const ref = useRef();
    
    return (
        <div className="s-first-screen">
            <div className="container">
                <div className="first-screen">
                    <div className="first-screen__title"><i><span>ОТКРОЙТЕ</span> для себя <span>НОВЫЙ</span> сервис</i></div>
                    <div className="first-screen__text">Мы, платформа для <span>поиска</span> и <span>выставления</span> автоуслуг </div>
                    <div className="first-screen__btns">
                        <a  target="#search"><div className="btn" onClick={() => props.setIsSearchClicked(true)}>Поиск услуг</div></a>
                        <div className="btn" onClick={() => {setIsAdd(true)}}>добавить услугу</div>
                    </div>
                </div>
            </div>
            <div className="car-block">
                <img src={car} />
            </div>
            <AddService isAdd={isAdd} setIsAdd={setIsAdd}/>
        </div>
    );
}

const Clues = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    return (
        <div className="clue-wrapper">
            <div className="container">
                <div className="title">Ищите услугу <span>быстро</span> и <span>легко</span></div>
                <div className="clue-content">
                    <div className="clue-content__item clue-content__item--1">
                        <div className="clue-content__btn">Шаг 1</div>
                        <div className="clue-content__img clue-content__img--1">
                            <img src={i1}></img>
                        </div>
                        <div className="clue-content__text">
                            Нажмите на <b>Каталог услуг</b> в меню или<br /> <span onClick={() => { setIsOpen(true)}}>скачайте приложение</span><br/> для полного удобства
                        </div>
                    </div>
                    <div className="clue-content__item clue-content__item--2">
                        <div className="clue-content__btn">Шаг 2</div>
                        <div className="clue-content__img clue-content__img--2">
                            <img src={i2}></img>
                        </div>
                        <div className="clue-content__text">
                        Внутри каталога - выберите нужную категорию для быстрого<br/> и удобного поиска
                        </div>
                    </div>
                    <div className="clue-content__item clue-content__item--3">
                        <div className="clue-content__btn">Шаг 3</div>
                        <div className="clue-content__img clue-content__img--3">
                            <img src={i3}></img>
                        </div>
                        <div className="clue-content__bottom">
                            <div className="clue-content__text">
                                Находите кучу реальных услуг<br/> с очень выгодными предложениями во всех аспектах
                            </div>
                            <a href="/catalogue" className="clue-content__link"><div className="btn">Перейти в каталог</div></a>
                        </div>
                    </div>
                </div>
                <DownloadForm isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </div>
    );
}

const AddingBlock = () => {
    return (
        <div className="adding-wrapper">
            <div className="container">
                <div className="adding-block">
                    <div className="title">Добавляйте <span>СВОИ</span> услуги</div>
                    <div className="adding-block__content">
                        <Order />
                        <Download />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Home = (props) => {
    return (
        <div className="home-wrapper">
            <FirstScreen isSearchClicked={props.isSearchClicked} setIsSearchClicked={props.setIsSearchClicked}/>
            <Clues />
            <AddingBlock />
            <div className="home-cart">
                <div className="container">
                    <div className="home-cart-top">
                        <div className="title">Популярные услуги</div>
                        <a className="showmore-link" href="/catalogue"><div className="showmore">СМОТРЕТЬ ВСЕ</div></a>
                    </div>
                    <Cart />
                </div>
            </div>
            <Reminder />
            <Question />
        </div>
    );
};

export default Home;