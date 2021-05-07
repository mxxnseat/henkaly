export function PopularyItem({img, header, percent }) {
    return (
        <div className="populary__item col-12 col-md-4">
            <div className="populary__image-wrap">
                <img className="populary__image" src={img} alt='Картинка в цифрах' />
            </div>
            <div className="populary__content">
                <div className="populary__header">{header}</div>
                <div className="populary__text">{percent}</div>
            </div>
        </div>
    )
}