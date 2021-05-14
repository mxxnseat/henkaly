import { useEffect } from "react"
import { CountItem } from "./countItem"

import {henkaliCountChange, henkaliCountSet} from "../../store/actions/henkali_count";
import { useDispatch, useSelector } from "react-redux";
import { generator } from "./generateNumber";

export function Count(){
    const dispatch = useDispatch();
    const henkali_count = useSelector(store=>store.henkali_value.count);
    const currentAddress = useSelector(store=>store.adresses.currentAdress)

    
    useEffect(()=>{
        const timeout = generator(dispatch, henkaliCountChange, henkali_count);

        return ()=>{
            clearTimeout(timeout);
        }
    }, [henkali_count]);
    useEffect(()=>{
        dispatch(henkaliCountSet(currentAddress));
    }, [currentAddress])

    return (
        <div className="count__wrapper row justify-content-between mx-0 col-12">
            {
                henkali_count&& henkali_count.split('').map((digit, index)=>{
                    return <CountItem key={index} value={digit} />
                })
            }
        </div>
    )
}