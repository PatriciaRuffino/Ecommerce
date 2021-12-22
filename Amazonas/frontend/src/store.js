import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import data from "./data";

const initialState = {};
const reducer = (state, action) => {
//mostra os produtos no state
    return {products: data.products}; 
};
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhacer(applyMiddleware(thunk))
    );

export default store;