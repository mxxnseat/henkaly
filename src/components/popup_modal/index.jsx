import {FeedBackModal} from "../modal";
import { ModalHeader } from "../total/modal_header-mob";
import {modalAction} from "../../store/actions/modal";

export function PopupModal(){
    return (
        <div className="modal_wrap">
            <div className="container">
                <ModalHeader close={modalAction} />

                <FeedBackModal popup={true} />
            </div>
        </div>
    )
}