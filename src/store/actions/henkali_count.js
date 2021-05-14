import axios from "axios";

export function henkaliCountChange(payload) {
    return {
        type: "HENKALI_COUNT_CHANGE",
        payload
    }
}

export function henkaliCountSet(currentAdress) {
    return (dispatch, getState) => {
        axios.get("/adresses.json")
            .then(({ data }) => {
                if(currentAdress){
                    data = data.filter(item => {
                        return (item.cord).toString() == (currentAdress.cord).toString()
                    });
                }
                
                if(data.length){
                    dispatch({
                        type: "SET_HENKALI_COUNT",
                        payload: data[0].henkali_value
                    })
                }
                
            })
    }
}