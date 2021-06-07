export function modalAction(){
    return{
        type: "TOGGLE_POPUP"
    }
}
export function popupMenuAction(){
    return {
        type: "TOGGLE_POPUP_MENU"
    }
}
export function popupSuccessAction(){
    return{
        type: "TOGGLE_SUCCESS_MODAL"
    }
}
export function closePopup(){
    return{
        type: "CLOSE_POPUP"
    }
}