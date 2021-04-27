
//digits
import metrs from "../../assets/img/facility/m2.png";
import checkue from "../../assets/img/facility/сheckue.svg";

//popularity
import henkali from "../../assets/img/icons/henkali.png";
import hot_dish from "../../assets/img/icons/hot_dish.png";
import hachapuri from "../../assets/img/icons/hachapuri.png";

import { FacilityItem } from "./facilityItem";
import { PopularyItem } from "./popularyItem";


export function Digital(){
    const facilityDigitals = [
        {
            img: metrs,
            header: 'Площадь заведения',
            digits: "120 м2"
        },
        {
            img: checkue,
            header: 'Средний чек',
            digits: "750 ₽"
        },
        {
            img: checkue,
            header: 'Количество чеков',
            digits: "1100 чеков"
        }
    ];

    const popularyGoods = [
        {
            img: henkali,
            header: "Хинкали",
            percent: "35%"
        },
        {
            img: hachapuri,
            header: "Хачапури",
            percent: "25%"
        },
        {
            img: hot_dish,
            header: "Горячие блюда",
            percent: "40%"
        },
    ]

    return (
        <section className="digital">
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <h2 className="heading col-12 pl-0">Хинкальные в цифрах</h2>
                        <div className="adress col-12 p-0">
                            <div className="adress-current row">
                                <div className="adress-current__city col-3">Симферополь</div>
                                <div className="adress-current__street ">ул. Турецкая 25</div>
                            </div>
                        </div>
                        <div className="facility mx-auto col-12 row">
                            {
                                facilityDigitals.length ? facilityDigitals.map(digits=><FacilityItem key={digits.header} {...digits} />) : ''
                            }
                        </div>
                        <div className="populary col-12">
                            <div className="digital__heading col-12">Популярный ассортимент</div>
                            <div className="populary-list row сol-12">
                                {
                                    popularyGoods.length ? popularyGoods.map(good=><PopularyItem key={good.header}{...good}/>): ''
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}