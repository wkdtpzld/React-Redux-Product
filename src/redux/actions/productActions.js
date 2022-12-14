import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
}

export const selectProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    };
}

export const removeProducts = (products) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: products
    };
};

export const setToken = (token) => {
    return {
        type: ActionTypes.SET_TOKEN,
        payload: token
    }
}

export const setCategory = (category) => {

    return {
        type: ActionTypes.SET_CATEGORY,
        payload: category
    }
}

export const addCart = (cart, products) => {
    return {
        type: ActionTypes.ADD_CART,
        payload: {
            cart,
            products
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: ActionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const removeCart = (itemID) => {
    return {
        type: ActionTypes.REMOVE_CART,
        payload: {
            id: itemID
        }
    }
}