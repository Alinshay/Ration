import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';


const initState = {
    logIn: false,
};


const Reducer1 = (state = initState, action) => { return state;}

const Reducer2 = (state = initState, action) => { return state;}



const rootReducer = combineReducers({ logic: Reducer1, form: formReducer });

export default rootReducer;
