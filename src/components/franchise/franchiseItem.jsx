import { useDispatch } from "react-redux"
import {modalAction} from "../../store/actions/modal";

export function FranchiseItem({ number, heading, slogan, list, buttonText }) {
    const dispatch = useDispatch();


    return (
        <div className="franchise__item col-md-6 col-xl-4">
            <div className="franchise__number">0{number}</div>
            <div className="franchise__slogan">{slogan}</div>
            <div className="franchise__heading">{heading}</div>
            <ul className="franchise__list">
                {
                    list.map((item,index)=> {
                        return (
                            <li key={index} className="franchise__list__item">
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="franchise__link" onClick={()=>dispatch(modalAction())}>{buttonText}</div>
        </div>
    )
}