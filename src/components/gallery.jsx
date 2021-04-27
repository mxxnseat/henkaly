import img_1 from "../assets/img/gallery/2.jpg";
import img_2 from "../assets/img/gallery/3.jpg";
import img_3 from "../assets/img/gallery/4.jpg";
import img_4 from "../assets/img/gallery/5.jpg";
import img_5 from "../assets/img/gallery/1.jpg";

export function Gallery(){
    return (
        <section className="header-gallery">
            <img src={img_1} className="gallery_img" alt="Хенкали на блюде" />
            <img src={img_2} className="gallery_img" alt="Хенкальная" />
            <img src={img_3} className="gallery_img" alt="Девушка и парень" />
            <img src={img_4} className="gallery_img" alt="Едят хенкали" />
            <img src={img_5} className="gallery_img" alt="Счетчик хенкали" />
        </section>
    )
}