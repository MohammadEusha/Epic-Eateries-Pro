import { combineReducers, createStore, applyMiddleware } from "redux";

import foodReducer from "./Reducer/foodReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const middleware = applyMiddleware(thunk)

const combinedReducer = combineReducers({
    foods: foodReducer,
})
export const store = createStore(combinedReducer, composeWithDevTools(middleware))