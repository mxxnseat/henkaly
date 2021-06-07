import { useEffect } from "react";
import { useDispatch } from "react-redux"
import {popupSuccessAction} from "../../store/actions/modal";
export function SuccessModal(){
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(1);
        setTimeout(()=>{
            console.log(1);
            dispatch(popupSuccessAction());
        }, 5000);
    }, []);

    return (

        <div className="modal_wrap">
            <div className="container">
                <div className="col-12 feedback_modal">
                    <div className="modal_close d-none d-md-block" onClick={() => dispatch(popupSuccessAction())}>
                        <img src={require("../../assets/img/close.svg").default} alt="Закрыть модальное окно" />
                    </div>
 
                    <h2 className="success_thx heading">Спасибо</h2>
                    <div className="success_content mx-auto">
                        <h4 className="heading">Ваша заявка принята.</h4>
                        <p className="success_text">
                            В ближайшее время с вами свяжется менеджер по продажам франшизы
                            «Старик Хинкалыч».
                        </p>
                        <div className="success_memo">
                            Через 5 секунд вы перейдете обратно на портал
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}