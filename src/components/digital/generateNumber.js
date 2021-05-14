export function generator(dispatch, setter, currentValue){
    const offsetHenkalis = Math.floor(Math.random()*(80-10) + 10);
    const randomTime = Math.floor(Math.random()+(6000-1000) + 1000);

    const timeout = setTimeout(()=>{
        if(currentValue != null){
            let tmpValue = parseInt(currentValue) + offsetHenkalis;
            let digitLength = tmpValue.toString().length;
            let zeros = '';
            for(let i = 0;i<currentValue.length-digitLength;i++){
                zeros+='0';
            }
            tmpValue = zeros+tmpValue;
            dispatch(setter(tmpValue))
        }
    }, randomTime);

    return timeout;
}