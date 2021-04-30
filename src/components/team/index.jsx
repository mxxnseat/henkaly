import { Tab } from "../total/tab";

import phone from "../../assets/img/icons/phone.svg";
import chief from "../../assets/img/team/1.png";
import empl_1 from "../../assets/img/team/2.png";
import empl_2 from "../../assets/img/team/3.png";
import empl_3 from "../../assets/img/team/4.png";
import instagram from "../../assets/img/icons/instagram.svg";
import whatsapp from "../../assets/img/icons/whatsapp.svg";

export function Team() {
    return (
        <section className="team">
            <div className="container pt-5">
                <div className="row mx-auto col-12 team_row">
                    <h2 className="heading">
                        Наша <span className="text_select-red">команда</span>
                    </h2>
                    <div className="subhead col-12 p-0">
                        Вы не будете работать с безликой командой. «Старик Хинкалыч» — это мы.
                    </div>

                    <div className="team_questions col-12 p-0">
                        <Tab index={0} img={phone} header={'Есть вопросы?'} text={'Задавайте их нам!'} />

                        <div className="team_questions__text">
                            Бизнесы создают сильные команды, особенно бизнес по франшизе. Ведь фактически
                            вы доверяете управление своим бизнесом нам.
                        </div>
                    </div>

                    <div className="our-team row">
                        <div className="chief our-team__item">
                            <img src={chief} alt="Главный" className="our-team__img" />
                            <div className="our-team__name">Кирилл Кирпичный</div>
                            <div className="our-team__emp-position">Ресторатор</div>
                            <div className="our-team__expirience">
                                <p>20 лет опыта в сфере общепита</p>
                                <p>Собственные рестораны: «СтарикХинкалыч», «Гагарин Пицца».</p>
                                <p>Среди которых культовые заведения Крыма: <br />Qбар и другие.</p>
                            </div>
                            <a href="#" className="our-team__communication">
                                <img src={instagram} alt="Инстаграм" />
                            </a>
                        </div>
                        <div className="our-team__helpers">
                            <div className="our-team__item row">
                                <div className="our-team__img col-5">
                                    <img src={empl_1} alt="картинка человека" />
                                </div>

                                <div className="col-7">
                                    <div className="our-team__name">Владимир Кисляков</div>
                                    <div className="our-team__emp-position">Управляющий сети «Старик Хинкалыч»</div>
                                    <div className="our-team__expirience">
                                        <p>10 лет опыта в сфере общепита</p>
                                    </div>
                                    <a href="#" className="our-team__communication">
                                        <img src={whatsapp} alt="Инстаграм" />
                                    </a>
                                </div>
                            </div>
                            <div className="our-team__item row">
                                <div className="our-team__img col-5">
                                    <img src={empl_2} alt="картинка человека" />
                                </div>

                                <div className="col-7">
                                    <div className="our-team__name">Евгения Рыбинская</div>
                                    <div className="our-team__emp-position">Маркетолог</div>
                                    <div className="our-team__expirience">
                                        <p>Опыт работы более 17 лет.Работа
                                             в ресторанном бизнесе 
                                            и с крупными сетевыми брендами.</p>
                                    </div>
                                    <a href="#" className="our-team__communication">
                                        <img src={whatsapp} alt="Инстаграм" />
                                    </a>
                                </div>
                            </div>
                            <div className="our-team__item row">
                                <div className="our-team__img col-5">
                                    <img src={empl_3} alt="картинка человека" />
                                </div>

                                <div className="col-7">
                                    <div className="our-team__name">Александр Суворов</div>
                                    <div className="our-team__emp-position">Менеджер по продажам «Старик Хинкалыч»</div>
                                    <div className="our-team__expirience">
                                        
                                    </div>
                                    <a href="#" className="our-team__communication">
                                        <img src={whatsapp} alt="Инстаграм" />
                                    </a>
                                </div>
                            </div>
                        
                            <div className="col-12 row align-items-center justify-content-between">
                                <div className="our-team__phone">+7 978 062-52-81</div>
                                <button className='button'>позвонить</button>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}