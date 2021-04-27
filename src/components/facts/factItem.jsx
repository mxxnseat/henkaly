

export function FactItem({img, heading, text}){
    return (
        <div className="fact">
            <img src={img} className="fact__img" alt="Факт изображение" />
            <div className="fact__content">
                <div className="fact__heading">{heading}</div>
                <div className="fact__text">{text}</div>
            </div>
        </div>
    )
}