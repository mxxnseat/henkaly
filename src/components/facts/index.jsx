import {FactItem} from "./factItem";
import factImg_1 from "../../assets/img/facts/1.jpg";
import factImg_2 from "../../assets/img/facts/2.jpg";
import factImg_3 from "../../assets/img/facts/3.jpg";
import { Button } from "../button";


export function Facts(){
    const factsContent = [
        {
            img: factImg_1,
            heading: "Уникальный продукт – Хинкали",
            text: `7 видов хинкали и запускаем новые по мере тестирования.`
        },
        {
            img: factImg_2,
            heading: "Грузинская атмосфера гостеприимства",
            text: `Мы продумали все: от музыки до монетницы при входе.`
        },
        {
            img: factImg_3,
            heading: "Высокие стандарты сервиса и качества",
            text: `Сотрудники проходят обучение и сдают экзамены.`
        }
    ];


    return (
        <section className="facts">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <h2 className="heading col-10 p-0">
                        <span className="text_select-red ">«Старик Хинкалыч»</span> — сильный бренд 
                        с понятными для гостей ценностями
                    </h2>
                    <div className="facts-wrapper col-12 p-0">
                        {
                            factsContent.map((fact)=> <FactItem key={fact.heading} {...fact} />)
                        }
                    </div>
                    <Button Class="mx-auto">
                        Получить бизнес план
                    </Button>
                </div>
            </div>

        </section>
        
    )
}