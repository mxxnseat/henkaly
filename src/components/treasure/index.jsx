import wallet from "../../assets/img/icons/treasure_wallet.svg";
import timer from "../../assets/img/tab-timer.svg";
import like from "../../assets/img/icons/like.svg";

import {TreasureItem} from "./treasureItem";

export function Treasure() {

    const treasures = [
        {
            active: true,
            img: wallet,
            heading: "Цена",
            list: [
                {
                    heading: "Хинкали от 35 рублей",
                    text: "Сохраняем неизменную цену в любом городе."
                },
                {
                    heading: "Хинкали и хачапури",
                    text: "Маржинальные блюда благодаря использованию локального продукта."
                },
                {
                    heading: "Сезональное меню",
                    text: "Позволяет работать на сезонных продуктах по оптимальной цене."
                }
            ]
        },
        {
            active: false,
            img: timer,
            heading: "Скорость",
            list: [
                {
                    heading: "15 минут ",
                    text: `Отдаем все блюда в меню за 15 минут.
                        Отдаем дюжину хинкали за 12 минут.`
                },
                {
                    heading: "Тестируем все блюда",
                    text: `Смотрим спрос покупателей
                    и обновляем позиции сезонно.`
                },
                {
                    heading: "Три недели на открытие*",
                    text: "50 дней на открытие.",
                    subtext: "*Наш рекорд открытия ресторана."
                }
            ]
        },
        {
            active: true,
            img: like,
            heading: "Атмосфера",
            list: [
                {
                    heading: "Грузинская кухня",
                    text: `Собрали и протестировали
                            лучшие блюда грузинской кухни.`
                },
                {
                    heading: "Пакет франшизы",
                    text: `Продумали интерьер
                    и дизайн до мелочей`
                },
                {
                    heading: "Открываем свои рестораны",
                    text: `У нас по настоящему
                    вкусно и душевно`
                }
            ]
        }
    ]

    return (
        <section className="treasure">
            <div className="container pt-5 pb-5">
                <h2 className="heading col-12 p-0">
                    <span className="text_select-red">Ценности </span>
                    хинкальной
                </h2>
                <div className="subhead col-12 p-0">
                    Узнать больше про точки роста и плюсы франшизы.
                </div>
                
                <div className="row justify-content-between flex-md-row flex-column align-items-center">
                    {
                        treasures.map(item=><TreasureItem key={item.heading} {...item} />)
                    }
                </div>
            </div>
        </section>
    )
}