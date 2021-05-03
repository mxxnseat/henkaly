import {Button} from "../total/button";

export function HenkaliMap(){
    const perspectiveList = [
        "Тверь",
        "Ярославль",
        "Смоленск",
        "Калуга",
        "Владимир",
        "Нижний Новгород",
        "Брянск",
        "Тула",
        "Рязань",
        "Волгоград",
        "Адыгея",
        "Ростов-на-Дону",
    ];
    return (
        <section className="henkali_map">
            <div className="container">
                <div className="row">
                    <h2 className="heading">
                        <span className="text_select-red">Старик Хинкалыч</span> на карте России
                    </h2>

                    <div className="row col-12">
                        <div className="perspective_city col-3">
                            <div className="perspective_city__heading">Перспективные города:</div>

                            <div className="perspective_city__list">
                                {
                                    perspectiveList.map(city=>{
                                        return (
                                            <div className="perspective_city__item">
                                                {city}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="henkali_map__map col-9 row">
                            <img className="map_part-1" src={require("../../assets/img/map/part_1.png").default} alt="Карта хенкали" />
                            <img className="map_part-2" src={require("../../assets/img/map/part_2.png").default} alt="Карта хенкали" />
                            <img className="map_part-3" src={require("../../assets/img/map/part_3.png").default} alt="Карта хенкали" />
                        </div>
                    </div>
                    <Button Class="mx-auto">получить бизнес план</Button>
                </div>
            </div>
        </section>
    )
}