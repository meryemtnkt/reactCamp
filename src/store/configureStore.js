import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export function configurStore() {

    return createStore(rootReducer,devToolsEnhancer())
    
}

//redux devtools chrome add