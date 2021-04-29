export function FranchiseItem({ number, heading, slogan, list, buttonText }) {
    return (
        <div className="franchise__item">
            <div className="number">0{number}</div>
            <div className="franchise__slogan">{slogan}</div>
            <div className="franchise__heading">{heading}</div>
            <div class="franchise__list">
                {
                    list.map((item,index)=> {
                        return (
                            <div key={index} className="franchise__list__item">
                                {item}
                            </div>
                        )
                    })
                }
            </div>
            <a href="#" className="franchise__link">{buttonText}</a>
        </div>
    )
}