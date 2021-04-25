export function Button(props){
    return (
        <button className={props.Class ? `button ${props.Class}`:'button'}>
            {props.children}
        </button>
    )
}