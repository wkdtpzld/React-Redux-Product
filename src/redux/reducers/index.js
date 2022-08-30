import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, setToken, setCategory, addCart } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    token: setToken,
    category: setCategory,
    cart: addCart
});

export default reducers;