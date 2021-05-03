import { Button } from "../total/button";
import { FranchiseItem } from "./franchiseItem";

export function Franchise() {
    const franchiseData = [
        {
            slogan: "ВСЕГДА ПОД РУКОЙ",
            heading: "Франчайзинг-бук",
            list: [
                "Франчайзинг-бук",
                "Инструкции по регистрации юридического лица",
                "Инструкции по работе в различных форматах",
                "Помощь в подборе и выборе локации",
                "Инструкции и рекомендации по получению алкогольной лицензии",
                "Инструкции и работа в системе учета",
            ],
            buttonText: "ПОЛУЧИТЬ пример франчайзинг бук"
        },
        {
            slogan: "ЗНАНИЕ СИЛА",
            heading: "Обучение",
            list: [
                "Обучение руководителя проекта на наших точках",
                "Обучение менеджера кухни проекта",
                "Обучение сотрудников зала",
                "Обучение сотрудников кухни",
            ],
            buttonText: "получить пример обучения"
        },
        {
            slogan: "архитектура кухни",
            heading: "Производство",
            list: [
                "Технологии производства блюд в видео-формате",
                "Технологические карты",
                "Макеты базового меню",
                "Инструкции по контролю качества продукции",
            ],
            buttonText: "ПОЛУЧИТЬ пример технологии"
        },
        {
            slogan: "продвижение",
            heading: "Маркетинг",
            list: [
                "Маркетинговый план открытия",
                "Рекомендации по привлечению гостей",
                "Размещение информации на главном сайте компании",
                "Регистрация на геосервисах и отзовиках",
                "Создание страниц в социальных сетях",
                "Предоставление сайта-магазина доставки",
                "Инфлюенс-маркетинг"
            ],
            buttonText: "ПОЛУЧИТЬ пример бизнес плана"
        },
        {
            slogan: "КАЧЕСТВЕННЫЙ СЕРВИС",
            heading: "Персонал",
            list: [
                "Инструкции по подбору персонала",
                "Обучающие материалы",
                "Должностные инструкции",
                "Макеты формы для сотрудников",
                "Инструкции по контролю качества работы сотрудников",
                "Чек-листы работы",
                "Инструкции по проведению инвентаризации"
            ],
            buttonText: "получить пример инструкции"
        }
    ]

    return (
        <section className="franchise">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <h2 className="heading">
                        <span className="text_select-red">Пакет франчайза</span> «Старик Хинкалыч»
                        </h2>

                    <div className="subhead col-12 p-0">
                    Что входит в пакет франчайза «Старик Хинкалыч».
                    </div>

                    <div className="row col-12 mx-auto justify-content-center">
                        {
                        franchiseData.map((el,index)=>{
                            return <FranchiseItem {...el} key={index} number={index+1} />
                        })
                        }
                    </div>
                    

                    <Button Class='mx-auto'>Получить бизнес план</Button>
                </div>
            </div>
        </section>
    );
}