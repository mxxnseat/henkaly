import {combineReducers} from "redux";

import popup from "./popups";
import adresses from "./adresses";
import sticky from "./sticky";

export default combineReducers({
    popup,
    adresses,
    sticky
});