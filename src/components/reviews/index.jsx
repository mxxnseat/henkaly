import { useState } from "react";
import { ReviewsItem } from "./reviewsItem";


export function Reviews(){
    const slides = [
        {
            name: "Денис Дячук",
            city: "Ялта",
            date: "16.04.2021",
            preview: require("../../assets/img/reviews/preview.png").default,
            video: require("../../assets/videos/reviews_denis.MP4").default
        },
        {
            name: "Денис Дячук",
            city: "Ялта",
            date: "16.04.2021",
            preview: require("../../assets/img/reviews/preview.png").default
        },
        {
            name: "Денис Дячук",
            city: "Ялта",
            date: "16.04.2021",
            preview: require("../../assets/img/reviews/preview.png").default
        },
        {
            name: "Денис Дячук",
            city: "Ялта",
            date: "16.04.2021",
            preview: require("../../assets/img/reviews/preview.png").default
        },
    ];
    const [offset, setOffset] = useState(0);
    let [currentSlide, setSlide] = useState(0);
    const slidesCount = slides.length;

    const nextSlide = ()=>{
        const width = document.querySelector(".reviews__item").clientWidth;
        ++currentSlide;
        if(currentSlide>=slidesCount){
            currentSlide = 0;
        }
        setOffset(-width*currentSlide);
        setSlide(currentSlide);
    }

    const prevSlide = ()=>{
        const width = document.querySelector(".reviews__item").clientWidth;
        --currentSlide;
        if(currentSlide<0){
            currentSlide = slidesCount-1;
        }
        setOffset(-width*currentSlide);
        setSlide(currentSlide);
    }

    return (
        <section className="reviews">
            <div className="container p-0 pt-5 pb-5 row mx-auto">
                <h2 className="heading">
                    <span className="text_select-red">Что говорят</span> наши франчайзи?
                </h2>
                <div className="subhead">Отзывы наших надежных партнеров и истории успеха.</div>

                <div className="row col-12 mx-auto align-items-center reviews__video-wrapper">

                    <div onClick={prevSlide} className="reviews__arrow left d-md-block d-none"></div>

                    <div className="reviews-list p-0 col-xl-10 col-md-8 mx-auto">
                        <div onClick={prevSlide} className="reviews__arrow left d-md-none d-block"></div>

                            <div className="reviews-list__lenta" style={{transform: `translateX(${offset}px)`}}>
                                {
                                    slides.map((slide,index)=><ReviewsItem key={index} {...slide} />)
                                }
                            </div>
                            
                        <div onClick={nextSlide} className="reviews__arrow right d-md-none d-block"></div>
                    </div>

                    <div onClick={nextSlide} className="reviews__arrow right d-md-block d-none"></div>

                </div>
                
            </div>
        </section>
    );
}