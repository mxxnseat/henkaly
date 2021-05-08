import logo from "../../assets/img/logo.svg";
import instagram from "../../assets/img/icons/instagram.svg";
import telegram from "../../assets/img/icons/telegram.svg";

import {BurgerMenu} from "./burger_menu";

export function Menu(){
    return (
        <div className="row justify-content-between  align-items-center">

            <BurgerMenu />
            <div className="logo-wrap col-3 p-0">
                <img src={logo} className="logo" alt="Логотип" />
            </div>
            <nav className="navigation col-5 d-none d-md-flex">
                <a href="" className="navigation__link">Концепция</a>
                <a href="" className="navigation__link">Команда</a>
                <a href="" className="navigation__link">Условия</a>
                <a href="" className="navigation__link">Контакты</a>
            </nav>
            <div className="social col-3">
                <div className="social__link phone">
                    <a href="tel:+79780625281" className="social__link social phone">
                    +79780625281
                    </a>
                </div>
                <a href="//instagram.com" className="social__link social">
                    <img src={instagram} alt="Инстаграм"/>
                </a>
                <a href="//tg" className="social__link social">
                    <img src={telegram} alt="Телеграм"/>
                </a>
            </div>
        </div>
    )
}