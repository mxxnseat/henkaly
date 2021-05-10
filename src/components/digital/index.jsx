//digits
import metrs from "../../assets/img/facility/m2.png";
import checkue from "../../assets/img/facility/сheckue.svg";

//popularity
import henkali from "../../assets/img/icons/henkali.png";
import hot_dish from "../../assets/img/icons/hot_dish.png";
import hachapuri from "../../assets/img/icons/hachapuri.png";

import { FacilityItem } from "./facilityItem";
import { PopularyItem } from "./popularyItem";
import { Count } from "./count";
import { Button } from "../total/button";

import {Carousel} from './carousel';
import { AdressItem } from "./adressItem";
import {YaMap} from "./yamaps";

import { useState } from "react";

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

    const adressList = [
        {
            city: 'Симферополь',
            street: 'ул. Киевская 189',
            shoppingCenter: 'ТЦ «Южная галерея»',
            cord: [44.985142, 34.086573]
        },
        {
            city: 'Симферополь',
            street: 'ул. Турецкая, д. 25',
            shoppingCenter: 'ТЦ «Южная галерея»',
            cord: [44.945150, 34.099940]
        },
        {
            city: 'Севастополь',
            street: 'ул. 6-я бастионная, д. 42',
            shoppingCenter: '',
            cord: [44.603629, 33.513349]
        },
        {
            city: 'Севастополь',
            street: 'ул. Вакуленчука, д. 29',
            shoppingCenter: 'трц «муссон»',
            cord: [44.585412, 33.486005]
        },
        {
            city: 'Бахчисарай',
            street: 'ул. Симферопольская, д. 5-а',
            shoppingCenter: '',
            cord: [44.755579, 33.856335]
        },
        {
            city: 'Алушта',
            street: 'ул. Набережная, д. 18',
            shoppingCenter: 'трц «муссон»',
            cord: [44.653498, 34.403014]
        },
        {
            city: 'Симферополь',
            street: 'ул. Киевская, д.189',
            shoppingCenter: 'ТЦ «Южная галерея»',
            cord: [44.985142, 34.086573]
        },
        {
            city: 'Симферополь',
            street: 'ш. Евпаторийское, д. 8',
            shoppingCenter: 'ТЦ «Меганом»',
            cord: [44.971128, 34.076988]
        },
        {
            city: 'Евпатория',
            street: 'ул. Интернациональная, д.130',
            shoppingCenter: '',
            cord: [45.200493, 33.344673]
        },
        {
            city: 'Керчь',
            street: 'ул. Ленина, д.23',
            shoppingCenter: '',
            cord: [45.354591, 36.471385]
        },
        {
            city: 'Симферополь',
            street: 'ул. Пушкина, д.11',
            shoppingCenter: '',
            cord: [44.950623, 34.098000]
        },
        {
            city: 'Ялта',
            street: 'ул. Игнатенко, д.20',
            shoppingCenter: '',
            cord: [44.496193, 34.173243]
        },
        {
            city: 'Курск',
            street: 'ул. Ленина, д.12',
            shoppingCenter: '',
            cord: [51.733675, 36.192503]
        },
        {
            city: 'Курск',
            street: 'ул. Карла маркса, д.6',
            shoppingCenter: '',
            cord: [51.748950, 36.191721]
        },
        {
            city: 'Кострома',
            street: 'ул. Советская, д.2',
            shoppingCenter: '',
            cord: [57.765398, 40.931727]
        },
        {
            city: 'Феодосия',
            street: 'ул, федько, 4',
            shoppingCenter: '',
            cord: [45.041445, 35.378378]
        },
        {
            city: 'Курск',
            street: 'ул. Студенческая, д. 1',
            shoppingCenter: 'ТЦ "Eвропа 40"',
            cord: [51.741700, 36.145773]
        },
        {
            city: 'Самара',
            street: 'ул. Аэродромная, д.47а',
            shoppingCenter: 'ТРК "Аврора Молл"',
            cord: [53.191368, 50.189800]
        },
        {
            city: 'Ижевск',
            street: 'ул. Пушкинская, д.252',
            shoppingCenter: '',
            cord: [56.859527, 53.210287]
        }
    ];
    const [currentAdress, setCurrentAdress] = useState(adressList[0]);
    const [showList, setShowList] = useState(false);
    const currentAdressHandler = (adress)=>{
        setCurrentAdress(adress);
        setShowList(false);
    }
    const adressPopupHandler = (e)=>{
        setShowList(showList ? false : true);
    }
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
    ];
    const slides = [
        <img src={require("../../assets/img/carousel/1.png").default} alt="1" />,
        <img src={require("../../assets/img/carousel/2.png").default} alt="2" />,
        <img src={require("../../assets/img/carousel/2.png").default} alt="2" />,
        <img src={require("../../assets/img/carousel/2.png").default} alt="2" />,
        <img src={require("../../assets/img/carousel/3.png").default} alt="3" />];

    
    
    return (
        <section className="digital">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="heading col-md-12 pl-0">Хинкальные в цифрах</h2>
                        <div className="adress col-md-12 p-0">
                            <div onClick={adressPopupHandler} className="adress-current row flex-nowrap">
                                <div className="adress-current__city col-md-3 col-5">{currentAdress.city}</div>
                                <div className="adress-current__street">{currentAdress.street}</div>
                            </div>

                            {
                                showList ? 
                                <div className="adress__list">
                                    {adressList.map((adress,index)=><AdressItem selectCallback={()=>currentAdressHandler(adress)} key={index} {...adress} />)}
                                </div> : ''
                            }
                            
                        </div>
                        <div className="facility mx-auto col-md-12 row">
                            {
                                facilityDigitals.length ? facilityDigitals.map(digits=><FacilityItem key={digits.header} {...digits} />) : ''
                            }
                        </div>
                        <div className="populary col-md-12">
                            <div className="digital__heading col-12">Популярный ассортимент</div>
                            <div className="populary-list row сol-md- 12">
                                {
                                    popularyGoods.length ? popularyGoods.map(good=><PopularyItem key={good.header}{...good}/>): ''
                                }
                            </div>
                        </div>
                        <div className="count col-md-12 pl-0">
                            <div className="row align-items-center pl-0">
                                <div className="digital__heading col-md-3 col-6">Счетчик хинкали</div>
                                <div className="digital__sub-heading col-md-9 col-6">Уже сварено и съедено</div>
                            </div>
                            <Count />
                        </div>
                        
                        <div className="carousel-wrap">
                            <Carousel slides={slides} />
                        </div>
                        <Button Class="mx-auto">Получить фин. модель</Button>
                    </div>
                </div>
            </div>
            
            <YaMap adresses={adressList} />
            
        </section>
    )
}