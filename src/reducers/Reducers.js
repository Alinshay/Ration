import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import {ENTRANCE,
        EXIT} from '../actions/action-types';

const initState = {
    signed: parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)signed\s*\=\s*([^;]*).*$)|^.*$/, "$1")),
    login: document.cookie.replace(/(?:(?:^|.*;\s*)login\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
    error: '',
    hasErrored: false,
    isLoading: false,
    info: {age: 0, height: 0, weight: 0, sex: '', activity: '', goal: '', img: 'https://www.pngitem.com/pimgs/m/302-3028991_incognito-icon-fedora-incognito-clipart-hd-png-download.png'}
};


const Reducer1 = (state = initState, action) => {

    if(action.type === ENTRANCE)
        return{...state, login: action.login, signed: 1};

    if(action.type === EXIT)
        return{...state, login: '', signed: 0};

    if(action.type === 'ERROR')
        return{...state, error: action.error};

    if(action.type ==='ITEMS_HAS_ERRORED')
        return{...state, hasErrored: true};

    if(action.type ==='ITEMS_IS_LOADING')
        return{...state, isLoading: true};

    if(action.type ==='UPDATE_INFO')
        return{...state, info: action.info};

    if(action.type==='ITEMS_FETCH_DATA_SUCCESS')
        return{...state, info: action.info, isLoading: false};

    return state;
};


const Reducer2 = (state = initState, action) => { return state;};

const rootReducer = combineReducers({ logic: Reducer1, form: formReducer });

export default rootReducer;
