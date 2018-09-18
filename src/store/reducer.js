import moduleReducer from './module/reducer';
import module2Reducer from './module2/reducer'
import {combineReducers} from 'redux';
 var reducer = combineReducers({
       num:moduleReducer,
       num2:module2Reducer
  })
export default reducer;