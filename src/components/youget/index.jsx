export function YouGet(){
    const youGetList = [
        {
            bold: `Вкусную грузинскую кухню \nс высокой маржинальностью`,
            text: "",
        },
        {
            bold: "Автоматизированную\n работу в CRM системах",
            text: "",
        },
        {
            bold: "Собственное \nприложение\n доставки\n и заказа\n за столом",
            text: "",
        },
        {
            bold: "Команду проекта \nот бренд шефа\n до маркетолога",
            text: "",
        },
        {
            bold: "Ведение \nсоциальных\n сетей",
            text: "",
        },
        {
            bold: "59 дней \n—\n Открытие точки",
            text: "",
        },
        {
            bold: "Понятная\n и проверенная\n бизнес модель",
            text: "",
        },
        {
            bold: "Маркетинг поддержку\n над акциями,\n сезонным меню,\n продвижением",
            text: "",
        },
        {
            bold: "Ответы\n на все\n вопросы",
            text: "",
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