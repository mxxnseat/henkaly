import { Button } from "../total/button";
import { Menu } from "./menu";
import { Tab } from "../total/tab";

import wallet from "../../assets/img/tab-wallet.svg";
import chart from "../../assets/img/tab-chart.svg";
import timer from "../../assets/img/tab-timer.svg";
import app from "../../assets/img/tab-app.svg";

export function Header() {
    const tabsContent = [
        {
            img: wallet,
            header: "375 000 ₽",
            text: "Чистая прибыль"
        },
        {
            img: chart,
            header: "от 15%",
            text: "Среднемесячная рентабельность"
        },
        {
            img: timer,
            header: "50 дней",
            text: "На открытие вашего заведения"
        },
        {
            img: app,
            header: "Приложение",
            text: "Для доставки и бронирования"
        },
    ]

    return (
        <header className="header">
            <div className="container">
                <Menu />

                <div className="row header_content-wraper">
                    <div className="header__content col-8">
                        <h1 className="header__content-heading">
                            Cамая крупная<br />
                            <span className="text_select-red">
                                сеть хинкальных
                                </span><br />
                                в России
                            </h1>
                        <div className="header__content-text">
                            Открой хинкальную с доставкой в своем городе!
                            </div>

                        <Button>
                            получить бизнес план
                            </Button>
                    </div>
                    <div className="tabs">
                        {tabsContent.map((tab,index)=><Tab {...tab} key={index} index={index} />)}
                        <div className="tab__memo">
                            * Результат может отличаться в каждом индивидуальном (отдельном) случае.
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}