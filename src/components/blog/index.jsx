import {Play} from "../total/play_button";


export function Blog(){
    return (
        <section className="blog">
            <div className="container">
                <div className="row pt-5">
                    <h2 className="heading col-12">
                        Видео блог
                    </h2>
                    <div className="subhead col-md-12">Полезные и понятные видео с подробностями и фишками франшизы.</div>

                    <div className="blog__video-list col-md-12">
                        <div className="blog__video-item main-video">
                            <Play />
                            <div className="video-preview_content">
                                Как зарабатывать на хинкалях от 350 тысяч в месяц 
                            </div>
                        </div>
                        <div className="blog__video-item">
                            <Play />
                        </div>
                        <div className="blog__video-item">
                            <Play />
                        </div>
                        <div className="blog__video-item">
                            <Play />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}