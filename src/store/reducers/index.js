import {combineReducers} from "redux";

import popup from "./popups";
import adresses from "./adresses";

export default combineReducers({
    popup,
    adresses
});