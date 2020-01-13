import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import {ENTRANCE,
        EXIT} from '../actions/action-types';

const initState = {
    signed: parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)signed\s*\=\s*([^;]*).*$)|^.*$/, "$1")),
    login: document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, "$1")
};


const Reducer1 = (state = initState, action) => {

    if(action.type === ENTRANCE)
        return{...state, login: action.login, signed: 1};

    if(action.type === EXIT)
        return{...state, login: '', signed: 0};

    return state;
};

const Reducer2 = (state = initState, action) => { return state;};



const rootReducer = combineReducers({ logic: Reducer1, form: formReducer });

export default rootReducer;
