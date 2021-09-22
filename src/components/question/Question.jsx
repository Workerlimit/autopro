import React, { useState, useEffect, useRef } from "react";
import "./Question.scss";
import PhoneModal from "../modals/PhoneModal";

const Question = () => {
    const [isPhone, setIsPhone] = useState(false);
    const ref = useRef();

    return (
        <div className="question-block">
            <div className="container">
                <div className="question">
                    <div className="question__content">
                        <div className="title">Остались вопросы?</div>
                        <div className="question__text">Если вас что-то заинтересовало,<br/> сообщите нам об этом оставив свою почту или позвоните. Будем на связи 😎</div>
                        <div className="question__btns">
                            <div className="btn">оставить почту</div>
                            <div className="btn" onClick={() => {setIsPhone(true)}}>Позвонить</div>
                        </div>
                    </div>
                    <div className="question__icon"></div>
                    <PhoneModal isPhone={isPhone} setIsPhone={setIsPhone} ref={ref} />
                </div>
            </div>
        </div>
    );
}

export default Question;