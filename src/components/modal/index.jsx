import { useDispatch } from "react-redux";
import InputMask from "react-input-mask";

import { modalAction, popupSuccessAction, closePopup } from "../../store/actions/modal";
import { useRef, useState } from "react";

import { nameValidate, emailValidate, phoneValidate } from "./validator";
import axios from "axios";

export function FeedBackModal(props) {
    const dispatch = useDispatch();
    const checkbox = useRef(null);
    const [errors, setError] = useState({
        name: {
            active: false,
            value: 'Имя не должно содержать символов !@#$%^&*&)(^?'
        },
        phone: {
            active: false,
            value: 'Неправильно набран телефон'
        },
        email: {
            active: false,
            value: 'Неправильно набран email. Повторите ввод'
        },
    });
    const [inputsValue, setInputValue] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const inputHandler = (e) => {
        const field = e.target.getAttribute("name");
        const value = e.target.value;
        setInputValue({
            ...inputsValue,
            [field]: value
        });
    }

    const buttonSendHandler = (e) => {

        const phone = inputsValue["phone"].replace(/\D/g, '');
        nameValidate(inputsValue["name"]) ? setError(errors => {
            return {
                ...errors,
                name: {
                    active: false,
                    value: 'Имя не должно содержать символов !@#$%^&*&)(^?'
                }
            }
        }) : setError(errors => {
            return {
                ...errors,
                name: {
                    active: true,
                    value: 'Имя не должно содержать символов !@#$%^&*&)(^?'
                }
            }
        });
        emailValidate(inputsValue["email"]) ? setError(errors => {
            return {
                ...errors,
                email: {
                    active: false,
                    value: 'Неправильно набран email. Повторите ввод'
                }
            }
        }) : setError(errors => {
            return {
                ...errors,
                email: {
                    active: true,
                    value: 'Неправильно набран email. Повторите ввод'
                }
            }
        });
        phoneValidate(phone) ? setError(errors => {
            return {
                ...errors,
                phone: {
                    active: false,
                    value: 'Неправильно набран телефон'
                }
            }
        }) : setError(errors => {
            return {
                ...errors,
                phone: {
                    active: true,
                    value: 'Неправильно набран телефон'
                }
            }
        });
        let counterErrorChecker = 0;

        for(let item in errors){
            if(errors[item].active){
                counterErrorChecker++;

                break;
            }
        }
        if(counterErrorChecker === 0 && checkbox.current.checked){
            dispatch(popupSuccessAction());
            dispatch(closePopup());
        }
    }


    return (
        <div className="col-12 feedback_modal">
            {
                props.popup ? <div className="modal_close  d-none d-md-block" onClick={() => dispatch(modalAction())}><img src={require("../../assets/img/close.svg").default} alt="Закрыть модальное окно" /></div> : ''
            }

            <div className="col-xl-10 col-10 col-md-12 mx-auto feedback_modal__wrap">
                <h2 className="heading">
                    <span className="text_select-red">Заполните форму</span> и получите
                </h2>

                <div className="feedback_modal__getlist">
                    <div className="feedback_modal__get-item">
                        <div className="number">1</div>
                        <div className="text">Подробную презентацию о франшизе «Старик Хинкалыч»</div>
                    </div>

                    <div className="feedback_modal__get-arrow"></div>

                    <div className="feedback_modal__get-item">
                        <div className="number">2</div>
                        <div className="text">Индивидуальную финансовую модель франшизы</div>
                    </div>
                </div>

                <div className="feedback_modal__form mx-auto row col-12 p-0">
                    <div className="col-md-12 row flex-md-nowrap p-0 mx-auto feedback_modal__input-wrap">
                        <div className={errors.name.active ? "feedback_modal__input-wrap error" : "feedback_modal__input-wrap"}>
                            <input type="text" onChange={inputHandler} name="name" defaultValue={inputsValue.name} className="feedback_modal__input" placeholder="Имя" />
                            <div className="feedback_modal__input-wrap__error">{errors.name.active ? errors.name.value : ''}</div>
                        </div>
                        <div className={errors.email.active ? "feedback_modal__input-wrap error" : "feedback_modal__input-wrap"}>
                            <input type="text" onChange={inputHandler} name="email" defaultValue={inputsValue.email} className="feedback_modal__input" placeholder="E-mail" />
                            <div className="feedback_modal__input-wrap__error">{errors.email.active ? errors.email.value : ''}</div>
                        </div>
                        <div className={errors.phone.active ? "feedback_modal__input-wrap error" : "feedback_modal__input-wrap"}>
                            <InputMask
                                className="feedback_modal__input"
                                onChange={inputHandler}
                                name="phone"
                                defaultValue={inputsValue.phone}
                                mask="+7 (999) 999-99-99"
                                placeholder="Телефон"
                            />
                            <div className="feedback_modal__input-wrap__error">{errors.phone.active ? errors.phone.value : ''}</div>
                        </div>
                    </div>

                    <div className="row col-12 mx-auto p-0 align-items-center">
                        <label>
                            <input type="checkbox" ref={checkbox} className="hidden_checkbox" id="privacy" />
                            <span className="feedback_modal__form-checkbox"></span>
                            <span>
                                Отправляя данные с этой формы, Вы принимаете <a href="#" className="text_select-red">условия политики конфиденциальности</a>
                            </span>
                        </label>
                    </div>

                    <div className="row flex-nowrap col-xl-8 justify-content-between submit-wrapper align-items-center p-0 mx-auto">
                        <a href="//wa.me/79780625281" target="_blank" className="social wa">
                            WhatsApp
                        </a>
                        <button className="button" onClick={buttonSendHandler}>получить предложение</button>
                        <a href="//t.me/franchise_hinkalych" target="_blank" className="social tg">
                            Telegram
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}