

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
            return { ...state, show: !state.show }
        case 'ADD_TO_CART':
            let newCart = initialState.cartItems.push(payload);
            const uniqueCarts = [...new Set(newCart)];
            return { ...state, cartItems: uniqueCarts, totalPrice: state.totalPrice + payload.price }
        case 'REMOVE_FROM_CART':
            return {
                ...state, cartItems: state.cartItems.filter(elem => elem.id !== payload.id),
                totalPrice: state.totalPrice - payload.price
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