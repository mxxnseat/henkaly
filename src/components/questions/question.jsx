export function QuestionItem({heading, text}){
    return (
        <div className="questions__item col-md-12">
            <div className="questions__item-heading">
                <div className="questions__item-heading__text">{heading}</div>
            </div>
            <div className="questions__item-text d-none">{text}</div>
        </div>
    )
}