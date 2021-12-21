

let initialState = {
    cartItems: [],
    show: false,
    cartCount: 0,
    totalPrice: 0
}

const cart = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'SHOW_CART':
            return { ...state, show: true }
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, payload],
                cartCount: state.cartCount += 1,
                totalPrice: state.totalPrice += payload.price
            }
        case 'REMOVE_FROM_CART':
            let afterDeleteCart = state.cartItems.filter(elem => elem.id !== payload.id);
            return {
                ...state,
                cartItems: afterDeleteCart,
                cartCount: state.cartCount -= 1,
                totalPrice: state.totalPrice -= payload.price,
                show: state.cartCount === 0 ? false : true
            }
        default:
            return state;
    }
}

export default cart;



export const showCart = (boolean) => {
    return {
        type: 'SHOW_CART',
        payload: boolean,
    };
};

export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};

export const removeFromCart = (product) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product,
    };
};

