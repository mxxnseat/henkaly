export const emailValidate = (value)=>{
    return value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) ? true : false;
} 

export const phoneValidate = (value)=>{
    return value.match(/^((\+7|7|8)+([0-9]){10})$/) ? true : false;
}

export const nameValidate = (value)=>{
    return value.match(/^[а-яА-Яa-zA-Z]{3,16}$/) ? true : false;
}