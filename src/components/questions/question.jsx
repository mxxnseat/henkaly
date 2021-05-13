import { useState } from "react"

export function QuestionItem({heading, text}){
    const [classNames, setClasses] = useState("questions__item col-md-12");
    const toggleActive = (e)=> {
        if(e.currentTarget.classList.contains("active")){
            setClasses("questions__item col-md-12");
        }else{
            setClasses("questions__item col-md-12 active");
        }
    };
    

    return (
        <div className={classNames} onClick={toggleActive}>
            <div className="questions__item-heading">
                <div className="questions__item-heading__text">{heading}</div>
            </div>
            <div className="questions__item-text">{text}</div>
        </div>
    )
}