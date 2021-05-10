import { useDispatch } from "react-redux"

import {popupMenuAction} from "../../store/actions/modal";

export function BurgerMenu(){
    const dispatch = useDispatch();

    return (
        <div onClick={()=>dispatch(popupMenuAction())} className="burger d-md-none d-flex flex-column justify-content-between col-3">
            <div className="burger__stick"></div>
        </div>
    )
}