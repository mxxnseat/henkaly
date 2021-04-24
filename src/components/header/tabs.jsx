import wallet from "../../assets/img/tab-wallet.svg";
import chart from "../../assets/img/tab-chart.svg";
import timer from "../../assets/img/tab-timer.svg";
import app from "../../assets/img/tab-app.svg";

export function Tabs(){
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
        <div className="tabs col-5">
            {tabsContent.map(({img, header,text}, index)=>{
                return (
                    <div className={index==0?"tab__item col-12 active":"tab__item col-12"} key={index}>
                        <div className="tab__item-img_wrap">
                            <img src={img} className="tab__item-img" />
                        </div>
                        <div className="tab__item-content_wrap col-10">
                            <div className="tab__item-heading">{header}</div>
                            <div className="tab__item-text">{text}</div>
                        </div>                  
                    </div>
                )
            })}
            <div className="tab__memo">
            * Результат может отличаться в каждом индивидуальном (отдельном) случае.
            </div>
        </div>
    )
}