const initialState = {
    isModal: false,
    isPopup: false
};

export default function(state = initialState, action){
    switch(action.type){
        case 'TOGGLE_POPUP': return {
                ...state,
                isModal: state.isModal ? false : true
        }
        case 'TOGGLE_POPUP_MENU': return {
            ...state,
            isPopup: state.isPopup ? false : true
        }
        default: return state;
    }
}