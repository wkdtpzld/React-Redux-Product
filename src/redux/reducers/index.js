import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, setToken, setCategory } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    token: setToken,
    category: setCategory
});

export default reducers;