const initialState = {

}


export default function(state = initialState, action){
    switch(action.type){
        case 'HENKALI_COUNT_CHANGE':{

            return {
                ...state,
                count: action.payload
            }
        } 
        case 'SET_HENKALI_COUNT': return {
            ...state,
            count: action.payload
        }
        default: return state;
    }
}