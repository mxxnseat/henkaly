export function Stage(){
    const stageList = [
        {
            text: 'Подготовка юр. лица: ИП или ООО'
        },
        {
            text: 'Встреча с ведущим менеджером'
        },
        {
            text: 'Оплата товарного знака и заключение договора концессии'
        },
        {
            text: 'Обучение'
        },
        {
            text: 'Заключение договора аренды'
        },
        {
            text: 'Дизайн-проект магазина, строительные работы'
        },
        {
            text: 'Набор персонала и его стажировка'
        },
        {
            text: 'Монтаж всего торгового оборудования'
        },
        {
            text: 'Техническое и праздничное открытие'
        }
    ];

    return (
        <div className="col-6 finance__stage pt-5 pb-5">
            <h2 className="heading">
                <div className="text_select-red">
                Этапы
                </div>взаимодействия
            </h2>
            <div className="finance__stage-process">Как будет строится процесс развертывания нашей франшизы.</div>
            <div className="finance__stage-process_wrap">
                {
                    stageList.map((stage, index)=>{
                        return (
                            <div className="finance__stage-item" key={index}>
                                <span className="marker"></span>

                                <div className="stage-number">Этап {index+1}</div>
                                <div className="stage-text">{stage.text}</div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}