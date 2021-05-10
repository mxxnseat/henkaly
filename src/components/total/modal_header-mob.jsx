import { useDispatch } from "react-redux";

export function ModalHeader(props){
    const dispatch = useDispatch();


    return (
        <div className="modal_wrap__header m-0 d-flex row d-md-none">
                    <div className="modal_close-wrap  col-3" onClick={()=>dispatch(props.close())}>
                        <img src={require("../../assets/img/close.svg").default} className="modal_close mob" alt="Закрыть модальное окно" />
                    </div>
                    <img src={require("../../assets/img/logo.svg").default}  className="logo mob"/>
                </div>
    );
}