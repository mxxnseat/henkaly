import { ModalHeader } from "../total/modal_header-mob";
import { popupMenuAction } from "../../store/actions/modal";

export function PopupMenu(){


    return (
        <div className="popup_menu">
            <ModalHeader close={popupMenuAction} />

            <div className="container row mx-auto p-0 m-0">
                <div className="popup_menu__list col-12">
                    <a href="#" className="popup_menu__link">Концепция</a>
                    <a href="#" className="popup_menu__link">Команда</a>
                    <a href="#" className="popup_menu__link">Условия</a>
                    <a href="#" className="popup_menu__link">Контакты</a>

                    <div className="popup_menu__connection">
                        <a href="tel:+7 978 062 52 81" className="popup_menu__connection-tel">+7 978 062 52 81</a>
                        <div className="row col-10 justify-content-between mx-auto mt-2">
                            <a href="#wa" className="popup_menu__connection-link">
                                <img src={require("../../assets/img/icons/whatsapp.svg").default} />
                            </a>
                            <a href="#tg" className="popup_menu__connection-link">
                                <img src={require("../../assets/img/icons/telegram_stroke.svg").default} />
                            </a>
                            <a href="#email" className="popup_menu__connection-link">
                                <img src={require("../../assets/img/icons/email_red.svg").default} />
                            </a>
                        </div>
                    </div>

                    <div className="popup_menu__social">
                        <div className="popup_menu__social-heading">
                            Мы в соц. сетях
                        </div>
                        <div className="popup_menu__social-list">
                            <a href="#fb" className="popup_menu__social-item">
                                <img src={require("../../assets/img/icons/facebook_red.svg").default} alt="Иконка фэйсбук" />
                                Facebook
                            </a>
                            <a href="#yt" className="popup_menu__social-item">
                                <img src={require("../../assets/img/icons/youtube_red.svg").default} alt="Иконка ютуба" />
                                YouTube
                            </a>
                            <a href="#inst" className="popup_menu__social-item">
                                <img src={require("../../assets/img/icons/instagram.svg").default} alt="Иконка инстаграма" />
                                Instagram
                            </a>
                            <a href="#vk" className="popup_menu__social-item">
                                <img src={require("../../assets/img/icons/vk_red.svg").default} alt="Иконка вконтакте" />
                                Вконтакте
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}