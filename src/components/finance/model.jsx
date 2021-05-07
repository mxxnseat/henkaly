
export function Model(){
    const modelList = [
        {
            img: require("../../assets/img/icons/key.svg").default,
            text: 'Бюджет на открытие',
            value: 'от 4 500 000 ₽ '
        },
        {
            img: require("../../assets/img/tab-wallet.svg").default,
            text: 'Прибыль в месяц',
            value: 'от 375 000 ₽'
        },
        {
            img: require("../../assets/img/icons/ticket.svg").default,
            text: 'Паушальный взнос',
            value: 'от 750 000 ₽'
        },
        {
            img: require("../../assets/img/facility/m2.png").default,
            text: 'Площадь заведения',
            value: '120-150 м2'
        },
        {
            img: require("../../assets/img/icons/calendar.svg").default,
            text: 'Срок окупаемости',
            value: '1 год'
        },
        {
            img: require("../../assets/img/tab-chart.svg").default,
            text: 'Рентабельность в месяц',
            value: '10–15%'
        }
    ]

    return (
        <div className="col-12 col-md-6 pt-5 pb-5 finance__model">
            <div className="col-9 mx-auto">
                <h2 className="heading">Финансовая модель</h2>
                <div className="finance__model-period">Мы работаем с 2016 года.<br/>20 заведений уже открыто.</div>
                {
                    modelList.map((model,index)=>{
                        return (
                            <div key={index} className="finance__model-item row align-items-center">
                                <div className="tab__item-img_wrap">
                                    <img src={model.img} className="tab__item-img" alt={model.text} />
                                </div>
                                <div className="tab__item-content_wrap col-9">
                                    <div className="tab__item-text">{model.text}</div>
                                    <div className="tab__item-heading">{model.value}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}