import { useState } from "react";
import {Button} from "../total/button";
import {MapLegend} from "./map_legend";

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

    const [currentPart, setPart] = useState('part_1');

    const partToggle = (e)=>{
        const partName = e.target.getAttribute("data-part");
        const activeMapPart = document.querySelector(".henkali_map__part-select.active");
        activeMapPart.classList.remove("active");
        e.target.classList.add("active");
        setPart(partName);
    }

    return (
        <section className="henkali_map">
            <div className="container">
                <div className="row">
                    <h2 className="heading">
                        <span className="text_select-red">Старик Хинкалыч</span> на карте России
                    </h2>
                    <div className="subhead d-md-none d-block">
                    Используйте схему для навигации по карте России.
                    </div>

                    <div className="henkali_map__part d-md-none d-flex mx-auto">
                        <div onClick={partToggle} className="henkali_map__part-select active" id="start_map" data-part="part_1"></div>
                        <div onClick={partToggle} className="henkali_map__part-select" id="middle_map" data-part="part_2"></div>
                        <div onClick={partToggle} className="henkali_map__part-select" id="end_map" data-part="part_3"></div>
                    </div>

                    <div className="row col-md-12 henkali_map__part-wrap">
                        <div className="perspective_city col-3 d-md-block d-none">
                            <div className="perspective_city__heading">Перспективные города:</div>

                            <div className="perspective_city__list">
                                {
                                    perspectiveList.map(city=>{
                                        return (
                                            <div key={city} className="perspective_city__item">
                                                {city}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="henkali_map__map col-md-9 flex-nowrap row">
                            <img className="map_part-1 map_part" id="part_1" src={require(`../../assets/img/map/${currentPart}.png`).default} alt="Карта хенкали" />
                            <img className="map_part-2 map_part d-md-block d-none" id="part_2" src={require("../../assets/img/map/part_2.png").default} alt="Карта хенкали" />
                            <img className="map_part-3 map_part d-md-block d-none" id="part_3" src={require("../../assets/img/map/part_3.png").default} alt="Карта хенкали" />
                        
                            <MapLegend />
                        </div>
                    </div>
                    <Button Class="mx-auto d-md-block d-none">получить бизнес план</Button>
                </div>
            </div>
        </section>
    )
}