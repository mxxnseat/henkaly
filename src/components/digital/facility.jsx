import metrs from "../../assets/img/facility/m2.png";
import checkue from "../../assets/img/facility/сheckue.svg";

import {useSelector} from "react-redux";

export function Facility(props){
    const currentAdress = useSelector(store=>store.adresses.currentAdress);

    return (
        <div className="facility mx-auto col-md-12 row">
            <div className="facility__item row col-12 col-md-4">
                    <div className="facility__item_image-wrap">
                        <img className="facility__item-image" src={metrs} alt='Картинка в цифрах' />
                    </div>
                    <div className="facility__content-wrap">
                        <div className="facility__item-header">Площадь заведения</div>           
                        <div className="facility__item-text">{currentAdress.square} м²</div>     
                    </div>
            </div>
            <div className="facility__item row col-12 col-md-4">
                    <div className="facility__item_image-wrap">
                        <img className="facility__item-image" src={checkue} alt='Картинка в цифрах' />
                    </div>
                    <div className="facility__content-wrap">
                        <div className="facility__item-header">Средний чек</div>           
                        <div className="facility__item-text">{currentAdress.check} ₽</div>     
                    </div>
            </div>
            <div className="facility__item row col-12 col-md-4">
                    <div className="facility__item_image-wrap">
                        <img className="facility__item-image" src={checkue} alt='Картинка в цифрах' />
                    </div>
                    <div className="facility__content-wrap">
                        <div className="facility__item-header">Количество чеков</div>           
                        <div className="facility__item-text">{currentAdress.check_count} чеков</div>     
                    </div>
            </div>
        </div>
    )
};