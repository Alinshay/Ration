import {
    ENTRANCE
} from './action-types';


export function signIn(login) {
    return {
        type: ENTRANCE,
        login
    };
}



export function trySignIn(login, password) {

    return (dispatch) => {
        fetch('http://localhost:5000/users')

         .then((response) => response.json())
         .then ((response) => response.forEach( item =>
             {if((item.login === login)&&(item.password === password))
             dispatch(signIn(login));}));

    }
}