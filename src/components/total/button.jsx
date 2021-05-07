import { useEffect, useState } from "react";

export function Button(props){

    const [classes, setClasses] = useState("button");

    
    useEffect(()=>{
        if(props.Class){
            setClasses(props.Class.split(" ").reduce((acc, cur)=>{return acc+' '+cur},classes));
        }
    }, []);

    return (
        <button className={classes}>
            {props.children}
        </button>
    )
}