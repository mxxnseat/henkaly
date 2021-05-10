import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {modalAction} from "../../store/actions/modal";

export function Button(props){
    const [classes, setClasses] = useState("button");
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(props.Class){
            setClasses(props.Class.split(" ").reduce((acc, cur)=>{return acc+' '+cur},classes));
        }
    }, []);

    return (
        <button className={classes} onClick={()=>dispatch(modalAction())}>
            {props.children}
        </button>
    )
}