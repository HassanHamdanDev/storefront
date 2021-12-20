import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './productsreducer';
import categories from './catagoriesreducer';
import cart from './cartreducer';

let reducers = combineReducers({ categories, products, cart });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();