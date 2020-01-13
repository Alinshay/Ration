import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import {ENTRANCE} from '../actions/action-types';

const initState = {
    signed: false,
    login: ''
};


const Reducer1 = (state = initState, action) => {

    if(action.type === ENTRANCE)
        return{...state, login: action.login, signed: true};

    return state;
};

const Reducer2 = (state = initState, action) => { return state;};



const rootReducer = combineReducers({ logic: Reducer1, form: formReducer });

export default rootReducer;
