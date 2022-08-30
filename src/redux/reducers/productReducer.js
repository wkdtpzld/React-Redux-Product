import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: []
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

export const addCart = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_CART:
            return { ...state, cart: payload };
        default:
            return state;
    }
}