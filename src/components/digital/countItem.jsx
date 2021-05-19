import {useEffect, useState} from "react";
import { useSelector } from "react-redux";

export function CountItem(props){
    const [currentTransform, setTransform] = useState('11px');
    const [countElHeight, setCountElHeight] = useState(48);
    useEffect(()=>{
        setCountElHeight(document.querySelector(".count__item-value").clientHeight);
    }, []);
    useEffect(()=>{
        setTransform(-props.value*countElHeight+5+'px');
    })

    return (
        <div className="count__item">
            <div className="count__list" style={{transform: `translateY(${currentTransform})`}}>
                <div className="count__item-value">0</div>
                <div className="count__item-value">1</div>
                <div className="count__item-value">2</div>
                <div className="count__item-value">3</div>
                <div className="count__item-value">4</div>
                <div className="count__item-value">5</div>
                <div className="count__item-value">6</div>
                <div className="count__item-value">7</div>
                <div className="count__item-value">8</div>
                <div className="count__item-value">9</div>
            </div>
        </div>
    )
}