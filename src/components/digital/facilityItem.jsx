export function FacilityItem({img, digits, header}){
    return (
        <div className="facility__item row col-12 col-md-4">
                <div className="facility__item_image-wrap">
                    <img className="facility__item-image" src={img} alt='Картинка в цифрах' />
                </div>
                <div className="facility__content-wrap">
                    <div className="facility__item-header">{header}</div>           
                    <div className="facility__item-text">{digits}</div>     
                </div>
        </div> 
    )
};