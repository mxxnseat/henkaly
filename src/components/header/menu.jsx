import logo from "../../assets/img/logo.png";
import instagram from "../../assets/img/instagram.svg";
import telegram from "../../assets/img/telegram.svg";

export function Menu(){
    return (
        <div className="row">
            <img src={logo} className="col-2" alt="Логотип" />
            <nav className="navigation col-9 offset-1">
                <a href="" className="navigation__link">Концепция</a>
                <a href="" className="navigation__link">Команда</a>
                <a href="" className="navigation__link">Условия</a>
                <a href="" className="navigation__link">Контакты</a>


                <a href="tel:+79780625281" className="navigation__link social">
                    +7 978 062 52 81
                </a>
                <a href="//instagram.com" className="navigation__link social">
                    <img src={instagram} alt="Инстаграм"/>
                </a>
                <a href="//tg" className="navigation__link social">
                    <img src={telegram} alt="Телеграм"/>
                </a>
            </nav>
        </div>
    )
}