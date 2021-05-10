import { useDispatch } from "react-redux";
import { Button } from "../total/button";

import {modalAction} from "../../store/actions/modal";

export function FeedBackModal(props) {
    const dispatch = useDispatch();

    return (
        <div className="col-12 feedback_modal">
            {
                props.popup ? <div className="modal_close  d-none d-md-block" onClick={()=>dispatch(modalAction())}><img src={require("../../assets/img/close.svg").default} alt="Закрыть модальное окно" /></div> : ''
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
                        <input type="text" className="feedback_modal__input" placeholder="Имя" />
                        <input type="text" className="feedback_modal__input" placeholder="E-mail" />
                        <input type="text" className="feedback_modal__input" placeholder="Телефон" />
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

                    <div className="row col-md-8 justify-content-between submit-wrapper align-items-center p-0 mx-auto">
                        <a href="#whatsapp" className="social wa">
                            WhatsApp
                        </a>
                        <Button>получить предложение</Button>
                        <a href="#telegram" className="social tg">
                            Telegram
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}