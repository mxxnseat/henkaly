export function Play({click}){
    return (
        <div className="play_btn" onClick={click}>
            <div className="play_btn__triangle"></div>
        </div>
    );
}