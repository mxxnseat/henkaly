export function TreasureItem(props){
    console.log(props);
    return (
        <div className="treasure__item">
            <div className="treasure__item-head">
                <img src={props.img} alt="Картинка ценностей" />
                {props.heading}
            </div>
            <ul className="treasure__list">
                {
                    props.list.map( (item,index)=>{
                        return (
                        <li key={index} className={item.active ? 'treasure__list-item active' : 'treasure__list-item'}>
                            <div className="treasure__list-item__head">{item.heading}</div>
                            <div className="treasure__list-item__text">{item.text}</div>
                            <div className="treasure__list-item__subtext">{item.subtext ? item.subtext : ''}</div>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}