export function Footer(){
    return (
        <footer className="footer">
            <div className="container row mx-auto p0">
                <div className="col-12 mb-5 row flex-md-nowrap p-0 mx-auto">
                    <div className="footer__list col-md-2">
                        <div className="footer__list-header">Концепция </div>

                        <a href="#" className="footer__link">Хинкальные - что это?</a>
                        <a href="#" className="footer__link">Хинкальные  в цифрах</a>
                        <a href="#" className="footer__link">Ценности хинкальной</a>
                    </div>
                    <div className="footer__list col-md-2">
                        <div className="footer__list-header">Команда</div>

                        <a href="#" className="footer__link">Пакет франчайза</a>
                        <a href="#" className="footer__link">Отзывы франчази</a>
                        <a href="#" className="footer__link">F.A.Q.</a>
                    </div>
                    <div className="footer__list col-md-2">
                        <div className="footer__list-header">Условия</div>

                        <a href="#" className="footer__link">Финансова модель</a>
                        <a href="#" className="footer__link">Этапы взаимодействия</a>
                        <a href="#" className="footer__link">Преимущества</a>
                    </div>
                    <div className="footer__list col-md-3 ml-md-3">
                        <div className="footer__list-header">Контакты</div>

                        <a href="tel:+7 978 062 52 81" className="footer__link phone">+7 978 062 52 81</a>
                        <div className="row social_contacts pl-md-3">
                            <a href="#" className="social_contacts-wa"></a>
                            <a href="#" className="social_contacts-tg"></a>
                            <a href="#" className="social_contacts-mail"></a>
                        </div>
                    </div>
                    <div className="footer__list col-md-3">
                        <div className="footer__list-header">Мы в соц. сетях</div>

                        <div className="row social_contacts">
                            <a href="//facebook.com/starikhinkalych/" className="social_contacts-fb col-5">Facebook</a>
                            <a href="#" className="social_contacts-yt col-5">YouTube</a>
                            <a href="//instagram.com/starikhinkalych/" className="social_contacts-inst col-5">Instagram</a>
                            <a href="//vk.com/starikhinkalych" className="social_contacts-vk col-5">Вконтакте</a>
                        </div>
                    </div>
                </div>
            
                <div className="copyright row col-md-12 mx-auto">
                    <div className="copyright__text">«Старик Хинкалыч» &copy;  2021</div>
                    <a href="#" className="copyright__link">Пользовательское соглашение</a>
                    <a href="#" className="copyright__link">Политика обработки персональных данных</a>
                    <div className="copyright__text">franchise@starikkhinkalich.ru</div>
                </div>
            </div>
        </footer>
    );
}