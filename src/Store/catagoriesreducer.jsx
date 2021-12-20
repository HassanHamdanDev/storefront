

let initialState = {
    categories: [
        {
            name: 'electronics',
            display_name: 'Electronics',
            description: 'jlayeh',
        },
        {
            name: 'fruit',
            display_name: 'Fruit',
            description: 'Zake',
        },
    ],
    activeCategories: {},
};

const categories = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            let activeCategories = initialState.categories.find((category) => category.name === payload);
            return { ...state, activeCategories: activeCategories };
        default:
            return state;
    }
};

export default categories;

export const active = (categoryName) => {
    return {
        type: 'ACTIVE',
        payload: categoryName,
    };
};