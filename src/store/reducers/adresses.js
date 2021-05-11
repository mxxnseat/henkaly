const initialState = {
    adresses: [],
    currentAdress: null
}

export default function(state = initialState, action){
    switch(action.type){
        case 'GET_ADRESS_LIST': return {
            ...state,
            adresses: action.payload,
            currentAdress: action.payload[0]
        }
        case 'SET_CURRENT_ADRESS': return {
            ...state,
            currentAdress: action.payload
        }

        default: return state;
    }
}