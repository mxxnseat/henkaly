import close from "../assets/img/close.svg";
import present from "../assets/img/present.svg";


export function Sale(props) {
    return (
        <div className="sale">
            <div className="container h-100 pr-0">
                <div className="bonus__image-wrap mob_bonus d-md-none"><img className="bonus__image" src={present} alt="Подарок" /></div>


                <div className="row h-100">
                    <div className="sale__text col-md-6" >
                        СКИДКА 20 000 ₽ за прохождение теста на тему:<br />
                        Какой формат франшизы «Старик Хинкалыч» тебе подходит?
                    </div>
                </div>
            </div>
            <div className="bonus row pr-0">
                <div className="bonus__text-wrap row d-none d-md-flex">
                    <div className="bonus__image-wrap">
                        <img className="bonus__image" src={present} alt="Подарок" />
                    </div>
                    <div className="bonus__text ">
                        Вам доступен бонус и скидка
                            </div>
                </div>
                <div className="bonus__close" onClick={() => props.close(false)}>
                    <img className="bonus__close-img" src={close} alt="Закрыть" />
                </div>
            </div>
        </div>
    )
}