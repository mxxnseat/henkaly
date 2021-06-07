const initialState = {
    isModal: false,
    isPopup: false,
    isSuccess: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_POPUP': return {
            ...state,
            isModal: state.isModal ? false : true
        }
        case 'CLOSE_POPUP': return{
            ...state,
            isModal: false
        }
        case 'TOGGLE_POPUP_MENU': return {
            ...state,
            isPopup: state.isPopup ? false : true
        }
        case 'TOGGLE_SUCCESS_MODAL': return {
            ...state,
            isSuccess: state.isSuccess ? false : true
        }
        default: return state;
    }
}