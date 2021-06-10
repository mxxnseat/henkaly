import {scroll} from "../total/scrollOnClick";

export function Footer(){
    return (
        <footer className="footer">
            <div className="container row mx-auto p0">
                <div className="col-12 mb-5 row flex-xl-nowrap p-0 mx-auto">
                    <div className="footer__list col-xl-2 col-md-4">
                        <div className="footer__list-header">Концепция </div>

                        <div onClick={()=>scroll(".henkali_is")} className="footer__link">Хинкальные - что это?</div>
                        <div onClick={()=>scroll(".digital")} className="footer__link">Хинкальные  в цифрах</div>
                        <div onClick={()=>scroll(".treasure")} className="footer__link">Ценности хинкальной</div>
                    </div>
                    <div className="footer__list col-xl-2 col-md-4">
                        <div className="footer__list-header">Команда</div>

                        <div onClick={()=>scroll(".franchise")} className="footer__link">Пакет франчайза</div>
                        <div onClick={()=>scroll(".reviews")} className="footer__link">Отзывы франчази</div>
                        <div onClick={()=>scroll(".questions")} className="footer__link">F.A.Q.</div>
                    </div>
                    <div className="footer__list col-xl-2 col-md-4">
                        <div className="footer__list-header">Условия</div>

                        <div onClick={()=>scroll(".finance__model")} className="footer__link">Финансова модель</div>
                        <div onClick={()=>scroll(".finance__stage")} className="footer__link">Этапы взаимодействия</div>
                    </div>
                    <div className="footer__list col-md-6 col-xl-3 ml-xl-3 mt-md-5 mt-0 mt-xl-0">
                        <div className="footer__list-header">Контакты</div>

                        <a href="tel:+7 978 062 52 81" className="footer__link phone">+7 978 062 52 81</a>
                        <div className="row social_contacts pl-md-3">
                            <a href="//wa.me/79780625281" className="social_contacts-wa"></a>
                            <a href="//t.me/franchise_hinkalych" className="social_contacts-tg"></a>
                            <a href="mailto:cx.franch@gmail.com" className="social_contacts-mail"></a>
                        </div>

                        <a href="mailto:cx.franch@gmail.com" className="footer__link email">cx.franch@gmail.com</a>
                    </div>
                    <div className="footer__list col-md-6 col-xl-3 mt-md-5 mt-0 mt-xl-0">
                        <div className="footer__list-header">Мы в соц. сетях</div>

                        <div className="row social_contacts">
                            <a href="#" target="_blank" className="social_contacts-yt col-5">YouTube</a>
                            <a href="//instagram.com/franchise_hinkalych" target="_blank" className="social_contacts-inst col-5">Instagram</a>
                            <a href="//vk.com/starikhinkalych" target="_blank" className="social_contacts-vk col-5">Вконтакте</a>
                        </div>
                    </div>
                </div>
            
                <div className="copyright row col-md-12 mx-auto">
                    <div className="copyright__text col-md-3 pl-0">«Старик Хинкалыч» &copy;  2021</div>
                    <div className="copyright__text col-md-3 pr-0 text-right">cx.franch@gmail.com </div>
                </div>
            </div>
        </footer>
    );
}