export function YouGet(){
    const youGetList = [
        {
            bold: "Вкусная грузинская кухня",
            text: "с высокой маржинальностью",
        },
        {
            bold: "Автоматизированная работа в CRM системах",
            text: "",
        },
        {
            bold: "Собственное приложение",
            text: "доставки и заказа за столом",
        },
        {
            bold: "Команда проекта",
            text: "от бренд шефа до маркетолога",
        },
        {
            bold: "Ведем социальные сети",
            text: "в каждом городе",
        },
        {
            bold: "Быстрое открытие, менее чем за 2 месяца",
            text: "",
        },
        {
            bold: "Понятная и проверенная бизнес модель",
            text: "",
        },
        {
            bold: "Маркетинг поддержка не только на открытие, ",
            text: "работаем каждый день над акциями, сезонным меню, продвижением.",
        },
        {
            bold: "Ответы на все вопросы",
            text: "По бизнесу на хинкали, от регламентов до технических карт.",
        }
    ];


    return (
        <section className="youget">
            <div className="container pt-5">
                <div className="row">
                    <h2 className="heading">
                        <span className="text_select-red">Работая с нами</span> вы получаете
                    </h2>

                    <div className="youget__list">
                        {
                            youGetList.map((item, index)=>{
                                return (
                                    <div key={index} className="youget__item">
                                        <div className="youget__content">
                                            <b>{item.bold}</b><br/>
                                            {item.text}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}