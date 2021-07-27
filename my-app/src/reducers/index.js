import { combineReducers } from 'redux';
import hobbyReducer from './hobby.js';
import userReducer from './user.js';


const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer
});

export default rootReducer;