import { YMaps, Map, Placemark } from 'react-yandex-maps';


export function YaMap({adresses}) {
    return (
        <YMaps>
            <div className="digital__map d-none d-md-block" id="map">
                <Map defaultState={{ center: [55.75, 37.57], zoom: 5 }} height="100%" width="380px">
                    
                    {
                        adresses.map((adress,index)=>{
                            return <Placemark key={index} geometry={adress.cord} />
                        })
                    }
                </Map>
            </div>
        </YMaps>
    )
}