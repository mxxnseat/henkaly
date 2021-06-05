import { ModalHeader } from "../total/modal_header-mob";
import { popupMenuAction, modalAction } from "../../store/actions/modal";
import { useDispatch } from "react-redux";
import {scroll} from "../total/scrollOnClick";

export function PopupMenu(){
    const dispatch = useDispatch();
    const scrollClickHandler = (el = null)=>{
        dispatch(popupMenuAction());
        
        el ? scroll(el) : dispatch(modalAction());
    }


    return (
        <div className="popup_menu">
            <ModalHeader close={popupMenuAction} />

            <div className="container row mx-auto mb-5 p-0 m-0">
                <div className="popup_menu__list col-12">
                    <div onClick={()=>scrollClickHandler(".henkali_is")} className="popup_menu__link">Концепция</div>
                    <div onClick={()=>scrollClickHandler(".team")} className="popup_menu__link">Команда</div>
                    <div onClick={()=>scrollClickHandler(".finance")} className="popup_menu__link">Условия</div>
                    <div onClick={()=>scrollClickHandler()} href="#" className="popup_menu__link">Контакты</div>

                    <div className="popup_menu__connection">
                        <a href="tel:+7 978 062 52 81" className="popup_menu__connection-tel">+7 978 062 52 81</a>
                        <div className="row col-10 justify-content-between mx-auto mt-2">
                            <a href="//wa.me/79780625281" className="popup_menu__connection-link">
                                <img src={require("../../assets/img/icons/whatsapp.svg").default} />
                            </a>
                            <a href="//t.me/franchise_hinkalych" className="popup_menu__connection-link">
                                <img src={require("../../assets/img/icons/telegram_stroke.svg").default} />
                            </a>
                            <a href="mailto:cx.franch@gmail.com" className="popup_menu__connection-link">
                                <img src={require("../../assets/img/icons/email_red.svg").default} />
                            </a>
                        </div>
                    </div>

                    <div className="popup_menu__social">
                        <div className="popup_menu__social-heading">
                            Мы в соц. сетях
                        </div>
                        <div className="popup_menu__social-list">
                            <a href="//www.facebook.com/starikhinkalych/" className="popup_menu__social-item">
                                <img src={require("../../assets/img/icons/facebook_red.svg").default} alt="Иконка фэйсбук" />
                                Facebook
                            </a>
                            <a href="#yt" className="popup_menu__social-item">
                                <img src={require("../../assets/img/icons/youtube_red.svg").default} alt="Иконка ютуба" />
                                YouTube
                            </a>
                            <a href="//www.instagram.com/starikhinkalych/" className="popup_menu__social-item">
                                <img src={require("../../assets/img/icons/instagram.svg").default} alt="Иконка инстаграма" />
                                Instagram
                            </a>
                            <a href="//vk.com/starikhinkalych" className="popup_menu__social-item">
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