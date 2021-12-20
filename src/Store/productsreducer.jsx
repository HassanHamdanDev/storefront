let initialState = {
    products: [
        {
            id: 1,
            name: 'IPhone 6',
            description: 'The iPhone 6 and 6 Plus include larger 4.7 and 5.5 inches (120 and 140 mm) displays, a faster processor, upgraded cameras, improved LTE and Wi-Fi connectivity and support for a near field communications-based mobile payments offering',
            category: 'electronics',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPR9QIimEZSvKqg6Et5Wr0H4x5j7XPPKLiR2-r9DQgyW-kTtfCGn9ZbUywE9WzLIXgRo&usqp=CAU',
            price: 599.0,
            inventory: 3,
        },
        {
            id: 2,
            name: 'Guava',
            description: 'are green, with slightly bumpy skin, often ripening to a yellow or almost maroon color. Though a guava smells a lot like a lemon, its pale pink flesh and juice are sweet and mild',
            category: 'fruit',
            image: 'https://post.healthline.com/wp-content/uploads/2020/09/benefits-of-guavas-732x549-thumbnail-732x549.jpg',
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
                product.category === payload
            );
            return { ...state, products: products };
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
