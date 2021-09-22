import React from "react";
import "./Order.scss";

const Order = (props) => {
    return (
        <div className="order-back">
            <div className="order-wrapper">
                <div className="popup-order__close" onClick={() => {props.setIsAddOpen(false)}}></div>
                <div className="order">
                    <div className="text order__text">Оставьте свои данные,<br/> и мы в скором времени свяжемся с вами</div>
                    <input className="input order__input" placeholder="Ваше имя" type="text"></input>
                    <input className="input order__input" placeholder="Номер мобильного телефона" type="text"></input>
                    <input className="input order__input" placeholder="Ваша почта" type="email"></input>
                    <div className="btn">Отправить</div>
                    <div className="add-text">Заранее благодарим за терпение! <br/>Спасибо!</div>
                </div>
            </div>
        </div>
    );
}

export default Order;