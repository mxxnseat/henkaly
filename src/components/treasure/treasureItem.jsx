export function TreasureItem(props){
    return (
        <div className="treasure__item">
            <div className="treasure__item-head">
                <img src={props.img} alt="Картинка ценностей" />
                {props.heading}
            </div>
            <ul className="treasure__list">
                <li className={props.active ? 'treasure__list-item active' : 'treasure__list-item'}>
                    <div className="treasure__list-item__head">{props.list[0].heading}</div>
                    <div className="treasure__list-item__text">{props.list[0].text}</div>
                </li>
                <li className="treasure__list-item">
                    <div className="treasure__list-item__head">{props.list[1].heading}</div>
                    <div className="treasure__list-item__text">{props.list[1].text}</div>
                </li>
                <li className="treasure__list-item">
                    <div className="treasure__list-item__head">{props.list[2].heading}</div>
                    <div className="treasure__list-item__text">{props.list[2].text}</div>
                    <div className="treasure__list-item__subtext">{props.list[2].subtext ? props.list[2].subtext : ''}</div>
                </li>
            </ul>
        </div>
    )
}