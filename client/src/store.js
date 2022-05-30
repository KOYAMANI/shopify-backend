import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {itemCreateReducer, itemDeleteReducer, itemEditReducer, itemSortReducer} from './reducers/itemReducers'

const reducer = combineReducers({
    itemCreate: itemCreateReducer,
    itemDelete: itemDeleteReducer,
    itemEdit: itemEditReducer,
    itemList: itemSortReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

export default store;