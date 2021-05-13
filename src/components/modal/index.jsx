import { useDispatch } from "react-redux";
import InputMask from "react-input-mask";

import { modalAction } from "../../store/actions/modal";
import { useState } from "react";

import { nameValidate, emailValidate, phoneValidate } from "./validator";
import axios from "axios";

export function FeedBackModal(props) {
    const dispatch = useDispatch();

    const [inputsValue, setInputValue] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const inputHandler = (e) => {
        const field = e.target.getAttribute("name");
        const value = e.target.value;
        console.log(value);
        setInputValue({
            ...inputsValue,
            [field]: value
        });
    }

    const buttonSendHandler = (e) => {
        const errors = {

        };

        const phone = inputsValue["phone"].replace(/\D/g, '');

        emailValidate(inputsValue["email"]) ? delete errors["email"] : errors["email"] = true;
        phoneValidate(phone) ? delete errors["phone"] : errors["phone"] = true;
        nameValidate(inputsValue["name"]) ? delete errors["name"] : errors["name"] = true;

        const privacyCheckbox = document.querySelector("#privacy");

        if (!Object.keys(errors).length && privacyCheckbox.checked) {
            axios.post("/sendForm", JSON.stringify(inputsValue), {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(data=>{
                    console.log(data);
                })
                .catch(error=>{
                    console.log("Some troubles. Try later");
                })
        } else {
            alert("ALERT 12RWDKLFKWDHOIF WEJK");
        }
    }


    return (
        <div className="col-12 feedback_modal">
            {
                props.popup ? <div className="modal_close  d-none d-md-block" onClick={() => dispatch(modalAction())}><img src={require("../../assets/img/close.svg").default} alt="Закрыть модальное окно" /></div> : ''
            }

            <div className="col-10 mx-auto feedback_modal__wrap">
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
                        <input type="text" onChange={inputHandler} name="name" defaultValue={inputsValue.name} className="feedback_modal__input" placeholder="Имя" />
                        <input type="text" onChange={inputHandler} name="email" defaultValue={inputsValue.email} className="feedback_modal__input" placeholder="E-mail" />
                        <InputMask
                            className="feedback_modal__input"
                            onChange={inputHandler}
                            name="phone"
                            defaultValue={inputsValue.phone}
                            mask="+7 (999) 999-99-99"
                            placeholder="Телефон"
                        />
                    </div>

                    <div className="row col-12 mx-auto p-0 align-items-center">
                        <label>
                            <input type="checkbox" className="hidden_checkbox" id="privacy" />
                            <span className="feedback_modal__form-checkbox"></span>
                            <span>
                                Отправляя данные с этой формы, Вы принимаете <a href="#" className="text_select-red">условия политики конфиденциальности</a>
                            </span>
                        </label>
                    </div>

                    <div className="row flex-nowrap col-md-8 justify-content-between submit-wrapper align-items-center p-0 mx-auto">
                        <a href="#whatsapp" className="social wa">
                            WhatsApp
                        </a>
                        <button className="button" onClick={buttonSendHandler}>получить предложение</button>
                        <a href="//t.me/franchise_hinkalych" className="social tg">
                            Telegram
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}