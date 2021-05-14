import {combineReducers} from "redux";

import popup from "./popups";
import adresses from "./adresses";
import sticky from "./sticky";
import henkali_value from "./henkali_count";

export default combineReducers({
    popup,
    adresses,
    sticky,
    henkali_value
});