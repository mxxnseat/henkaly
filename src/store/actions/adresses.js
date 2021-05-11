export function getAdresses(){
    return dispatch=>{
        fetch("/adresses.json")
            .then(res=>res.json())
            .then(data=>{
                dispatch({
                    type: "GET_ADRESS_LIST",
                    payload: data
                });
            })
            .catch(error=>{
                console.log(error);
            });
    }
}

export function setCurrentAdress(payload){
    return {
        type: "SET_CURRENT_ADRESS",
        payload
    }
}