import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
    cart: []
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state
    }
}

export const setToken = (state = "", { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TOKEN:
            return payload;
        default:
            return state;
    }
}

export const setCategory = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CATEGORY:
            return {...state, categories: payload};
        default:
            return state;
    }
}

export const addCart = (state = initialState , { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_CART:
            
            const item = payload.products.find((prev) => prev.id === payload.cart.id);
            const inCart = state.cart.find(item => item.id === payload.cart.id ? true : false);
            
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === payload.cart.id
                        ? { ...item, qty: parseInt(item.qty + 1) }
                        : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case ActionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === payload.id ? {...item, qty: parseInt(payload.qty)} : item)
            }
        case ActionTypes.REMOVE_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            }
        default:
            return state;
    }
}