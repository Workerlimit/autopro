import React, {useState} from "react";
import Question from "../question/Question";
import Reminder from "../reminder/Reminder";
import "./Support.scss";

const Answers = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    return (
        <div className="answers-block">
            <div className="container">
                <div className="title">Часто задаваемые вопросы</div>
                <div className="answers-block__content">
                    <div className="answers-block__item">
                        <div className="answers-block__item-top" onClick={() => setIsActive(!isActive)}>
                            <div className="answers-block__item-question">Как мне добавить объявление ?</div>
                            <div className={`answers-block__item-btn ${isActive ? "active" : ""}`}></div>
                        </div>
                        <div className={`answers-block__item-answer ${isActive ? "show" : ""}`}>В настоящей политике описывается информация, которую мы обрабатываем для поддержки Facebook, Instagram, Messenger и других продуктов и функций, предлагаемых Facebook (\"Продукты Facebook\" или \"Продукты\"). Дополнительные инструменты и информацию вы можете найти в Настройках Facebook и Настройках Instagram.</div>
                    </div>
                    <div className="answers-block__item">
                        <div className="answers-block__item-top" onClick={() => setIsActive2(!isActive2)}>
                            <div className="answers-block__item-question">Как мне добавить объявление ?</div>
                            <div className={`answers-block__item-btn ${isActive2 ? "active" : ""}`}></div>
                        </div>
                        <div className={`answers-block__item-answer ${isActive2 ? "show" : ""}`}>В настоящей политике описывается информация, которую мы обрабатываем для поддержки Facebook, Instagram, Messenger и других продуктов и функций, предлагаемых Facebook (\"Продукты Facebook\" или \"Продукты\"). Дополнительные инструменты и информацию вы можете найти в Настройках Facebook и Настройках Instagram.</div>
                    </div>
                    <div className="answers-block__item">
                        <div className="answers-block__item-top" onClick={() => setIsActive3(!isActive3)}>
                            <div className="answers-block__item-question">Как мне добавить объявление ?</div>
                            <div className={`answers-block__item-btn ${isActive3 ? "active" : ""}`}></div>
                        </div>
                        <div className={`answers-block__item-answer ${isActive3 ? "show" : ""}`}>В настоящей политике описывается информация, которую мы обрабатываем для поддержки Facebook, Instagram, Messenger и других продуктов и функций, предлагаемых Facebook (\"Продукты Facebook\" или \"Продукты\"). Дополнительные инструменты и информацию вы можете найти в Настройках Facebook и Настройках Instagram.</div>
                    </div>
                    <div className="answers-block__item">
                        <div className="answers-block__item-top" onClick={() => setIsActive4(!isActive4)}>
                            <div className="answers-block__item-question">Как мне добавить объявление ?</div>
                            <div className={`answers-block__item-btn ${isActive4 ? "active" : ""}`}></div>
                        </div>
                        <div className={`answers-block__item-answer ${isActive4 ? "show" : ""}`}>В настоящей политике описывается информация, которую мы обрабатываем для поддержки Facebook, Instagram, Messenger и других продуктов и функций, предлагаемых Facebook (\"Продукты Facebook\" или \"Продукты\"). Дополнительные инструменты и информацию вы можете найти в Настройках Facebook и Настройках Instagram.</div>
                    </div>
                    <div className="answers-block__item">
                        <div className="answers-block__item-top" onClick={() => setIsActive5(!isActive5)}>
                            <div className="answers-block__item-question">Как мне добавить объявление ?</div>
                            <div className={`answers-block__item-btn ${isActive5 ? "active" : ""}`}></div>
                        </div>
                        <div className={`answers-block__item-answer ${isActive5 ? "show" : ""}`}>В настоящей политике описывается информация, которую мы обрабатываем для поддержки Facebook, Instagram, Messenger и других продуктов и функций, предлагаемых Facebook (\"Продукты Facebook\" или \"Продукты\"). Дополнительные инструменты и информацию вы можете найти в Настройках Facebook и Настройках Instagram.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Support = () => {
    return (
        <div className="support-wrapper">
            <Question />
            <Answers />
            <Reminder />
        </div>
    );
}

export default Support;