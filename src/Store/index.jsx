import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './productsreducer';
import categories from './catagoriesreducer';

let reducers = combineReducers({ categories, products });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();