import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItms";

const initialState = {
//bizim değişkenmiz  : tanımlı değişken
    cartItems:cartItems
}

export default function cartReducer(state=initialState, {type,payload}){

    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product.id === payload.id)
            break;
    
        default:
            break;
    }

}