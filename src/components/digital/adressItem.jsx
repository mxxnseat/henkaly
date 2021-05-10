export function AdressItem({city, street, shoppingCenter, selectCallback}) {
    return (
        <div className="adress__item" onClick={selectCallback}>
            <div className="adress__city">{city}</div>
            <div className="adress__street">{street}</div>
            <div className="adress__shopping-center">{shoppingCenter}</div>
        </div>
    )
}