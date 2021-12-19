let initialState = {
    products: [
        {
            id: 1,
            name: 'IPhone 6',
            description: 'The iPhone 6 and 6 Plus include larger 4.7 and 5.5 inches (120 and 140 mm) displays, a faster processor, upgraded cameras, improved LTE and Wi-Fi connectivity and support for a near field communications-based mobile payments offering',
            category: 'electronics',
            price: 599.0,
            inventory: 3,
        },
        {
            _id: 1,
            name: 'Guava',
            description: 'are green, with slightly bumpy skin, often ripening to a yellow or almost maroon color. Though a guava smells a lot like a lemon, its pale pink flesh and juice are sweet and mild',
            category: 'fruit',
            price: 2.39,
            inventory: 90,
        },
    ],
    count: 0,
};

const products = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            let products = initialState.products.filter((product) =>
                product.category === payload ? product.category : null
            );
            return { products, count: state.count };
        case 'INC':
            const count = state.count + 1;
            return { products: state.products, count };
        default:
            return state;
    }
};

export default products;

export const active = (categoryName) => {
    return {
        type: 'ACTIVE',
        payload: categoryName,
    };
};

export const increment = () => {
    return {
        type: 'INC',
    };
};