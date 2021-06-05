//popularity
import henkali from "../../assets/img/icons/henkali.png";
import hot_dish from "../../assets/img/icons/hot_dish.png";
import hachapuri from "../../assets/img/icons/hachapuri.png";

import { Facility } from "./facility";
import { PopularyItem } from "./popularyItem";
import { Count } from "./count";
import { Button } from "../total/button";

import {Carousel} from './carousel';
import { AdressItem } from "./adressItem";
import {YaMap} from "./yamaps";

import { useEffect, useState } from "react";

import {getAdresses, setCurrentAdress} from "../../store/actions/adresses";
import { useDispatch, useSelector } from "react-redux";

export function Digital(){
    const popularyGoods = [
        {
            img: henkali,
            header: "Хинкали",
            percent: "35%"
        },
        {
            img: hot_dish,
            header: "Горячие блюда",
            percent: "40%"
        },
        {
            img: hachapuri,
            header: "БАР",
            percent: "25%"
        }
    ];
    
    const dispatch = useDispatch();
    const adressList = useSelector(store=>store.adresses.adresses);
    const currentAdress = useSelector(store=>store.adresses.currentAdress);
    

    useEffect(() => dispatch(getAdresses()), []);

    const [showList, setShowList] = useState(false);

    const currentAdressHandler = (adress)=>{
        dispatch(setCurrentAdress(adress));
        setShowList(false);
    }
    const adressPopupHandler = (e)=>{
        setShowList(showList ? false : true);
    }

    
    const slides = [
        <img src={require("../../assets/img/carousel/1.jpg").default} alt="1" />,
        <img src={require("../../assets/img/carousel/2.jpg").default} alt="2" />,
        <img src={require("../../assets/img/carousel/3.jpg").default} alt="3" />,
        <img src={require("../../assets/img/carousel/4.jpg").default} alt="4" />,
        <img src={require("../../assets/img/carousel/5.jpg").default} alt="5" />,
        <img src={require("../../assets/img/carousel/6.jpg").default} alt="6" />,
        <img src={require("../../assets/img/carousel/7.jpg").default} alt="7" />
    ];

    
    
    return (
        <section className="digital">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-md-12">
                        <h2 className="heading col-md-12 pl-0">Хинкальные в цифрах</h2>
                        <div className="adress col-md-12 p-0">
                            <div onClick={adressPopupHandler} className="adress-current row flex-nowrap">
                                <div className="adress-current__city col-md-3 col-5">{currentAdress ? currentAdress.city : ''}</div>
                                <div className="adress-current__street">{currentAdress ? currentAdress.street : ''}</div>
                            </div>

                            {
                                showList ? 
                                <div className="adress__list">
                                    {adressList.map((adress,index)=><AdressItem selectCallback={()=>currentAdressHandler(adress)} key={index} {...adress} />)}
                                </div> : ''
                            }
                            
                        </div>
                        <Facility />
                        <div className="facility mx-auto col-md-12 row">
                            
                            {/* {
                                facilityDigitals.length ? facilityDigitals.map(digits=><FacilityItem key={digits.header} adress={currentAdress} {...digits} />) : ''
                            } */}
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
                                <div className="digital__heading col-xl-3 col-md-4 col-6">Счетчик хинкали</div>
                                <div className="digital__sub-heading col-xl-9 col-md-5 col-6">Уже сварено и съедено</div>
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
            <YaMap adresses={adressList} height="540px" width="100%" classes="d-none d-md-block d-xl-none" />
            <YaMap adresses={adressList} height="100%" width="280px" classes="d-none d-xl-block position-absolute" />
            
        </section>
    )
}