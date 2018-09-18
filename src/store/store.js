import {createStore,applyMiddleware} from "redux";
import reducer from "./reducer"
import thunk from 'redux-thunk';
var stroe = createStore(reducer,applyMiddleware())

export default stroe;
