const initialState = {
    sticky: false,
}

export default function(state = initialState, action){
    switch(action.type){
        case 'SET_STICKY': return {
            ...state,
            sticky: action.payload
        }
        default: return state
    }
}