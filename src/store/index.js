import {createStore, combineReducers} from "redux";
import userReducers from "./reducers/userReducers";
import { devToolsEnhancer } from 'redux-devtools-extension';

const root = combineReducers({
    userReducers
})

const store = createStore(root,devToolsEnhancer());
export default store;
