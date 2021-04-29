import "./carousel.scss";

import prev from "../../assets/img/icons/angle_left.svg";
import next from "../../assets/img/icons/angle_right.svg";

export function Carousel({slides}){
    return (
        <div className="slider">
            <div className="carousel">
                {
                    slides.map((slide)=>{
                        return (
                            <div className="carousel__item">
                                <img src={slide} alt=""/>
                            </div>
                        );
                    })
                }
            </div>

            <div className="arrows">
                <div className="next arrow disable">
                    <img src={next} alt="Следующий слайд"/>
                </div>
                <div className="slider__count">1/12</div>
                <div className="prev arrow">
                    <img src={prev} alt="Предыдущий слайд"/>
                </div>
            </div>
        </div>
    );
}