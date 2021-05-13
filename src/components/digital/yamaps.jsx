import { useDispatch } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import {setCurrentAdress} from "../../store/actions/adresses";

export function YaMap({adresses, width, classes, height}) {
    const dispatch = useDispatch();
    const placemarkClickHandler = (adress)=>{
        dispatch(setCurrentAdress(adress))
    }


    return (
        <YMaps>
            <div className={`digital__map ${classes}`} id="map">
                <Map defaultState={{ center: [44.948237, 34.100318], zoom: 4 }} height={height} width={width}>
                    
                    {
                        adresses.map((adress,index)=>{
                            return <Placemark
                                key={index}
                                geometry={adress.cord}
                                onClick={()=>placemarkClickHandler(adress)}
                            />
                        })
                    }
                </Map>
            </div>
        </YMaps>
    )
}