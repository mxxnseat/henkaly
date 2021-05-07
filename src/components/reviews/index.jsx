import { Play } from "../total/play_button";


export function Reviews(){
    return (
        <section className="reviews">
            <div className="container pt-5 pb-5 row mx-auto">
                <h2 className="heading">
                    <span className="text_select-red">Что говорят</span> наши франчайзи?
                </h2>
                <div className="subhead">Отзывы наших надежных партнеров и истории успеха.</div>

                <div className="row col-12 mx-auto align-items-center reviews__video-wrapper">

                    <div className="reviews__arrow left d-md-block d-none"></div>

                    <div className="reviews-list col-md-10 mx-auto">
                        <div className="reviews__arrow left d-md-none d-block"></div>
                            <div className="reviews__item">
                                <div className="reviewer_info mx-auto">
                                    <div className="reviewer_info__name">Денис Дячук</div>
                                    <div className="reviewer_info__city">
                                        Город: <span className="current_city">Ялта</span>
                                    </div>
                                    <div className="reviewer_info__date">
                                        Дата открытия: <span className="current_date">16.04.2021</span>
                                    </div>
                                </div>
                                <div className="reviewer__video main-video">
                                    <img className="reviews__preview" src={require("../../assets/img/reviews/preview.png").default} />
                                    <Play />
                                </div>
                            </div>
                        <div className="reviews__arrow right d-md-none d-block"></div>
                    </div>

                    <div className="reviews__arrow right d-md-block d-none"></div>

                </div>
                
            </div>
        </section>
    );
}