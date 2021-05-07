export function QuestionItem({heading, text}){
    return (
        <div className="questions__item col-md-12">
            <div className="questions__item-heading">{heading}</div>
            <div className="questions__item-text d-none">{text}</div>
        </div>
    )
}