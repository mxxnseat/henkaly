import { Play } from "../total/play_button";

export function ReviewsItem({name, city, date, preview}) {
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
                <img className="reviews__preview" src={preview} />
                <Play />
            </div>
        </div>
    )
}