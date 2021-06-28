// tüm stataleri topladığımız yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer= combineReducers({

    cart : cartReducer,
    // user :userReducer,
})
export default rootReducer;
