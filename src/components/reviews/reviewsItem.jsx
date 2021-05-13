import { Play } from "../total/play_button";

import {useState} from "react";

export function ReviewsItem({name, city, date, preview, video}) {
    const [isVideo, setVideo] = useState(false);

    return (
        <div className="reviews__item">
            <div className="reviewer_info mx-auto">
                <div className="reviewer_info__name">{name}</div>
                <div className="reviewer_info__city">
                    Город: <span className="current_city">{city}</span>
                </div>
                <div className="reviewer_info__date">
                    Дата открытия: <span className="current_date">{date}</span>
                </div>
            </div>
            <div className="reviewer__video main-video">
                {
                    isVideo ?
                    <video controls className="reviews__preview" autoplay>
                        <source src={video} type="video/mp4" />
                    </video>
                    : 
                    <>
                        <img className="reviews__preview" src={preview} />
                        <Play click={()=>setVideo(true)}/>
                    </>
                }
                

                
            </div>
        </div>
    )
}