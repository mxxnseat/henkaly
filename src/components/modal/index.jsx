import { Button } from "../total/button";

export function FeedBackModal() {
    const getList = [
        "Подробную презентацию о франшизе «Старик Хинкалыч»",
        "Индивидуальную финансовую модель франшизы"
    ]


    return (
        <div className="col-12 feedback_modal">
            <div className="col-10 mx-auto">
                <h2 className="heading">
                    <span className="text_select-red">Заполните форму</span> и получите
                </h2>

                <div className="feedback_modal__getlist">
                    {
                        getList.map((text, index) => {
                            return (
                                <div className="feedback_modal__get-item">
                                    <div className="number">{index + 1}</div>
                                    <div className="text">{text}</div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="feedback_modal__form mx-auto row col-12 p-0">
                    <div className="col-12 row flex-nowrap p-0 mx-auto">
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

                    <div className="row col-8 justify-content-between align-items-center p-0 mx-auto">
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