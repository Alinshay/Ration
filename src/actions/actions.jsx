import {
    ENTRANCE,
    EXIT
} from './action-types';


export function signIn(login) {
    return {
        type: ENTRANCE,
        login
    };
}

function signOut() {
    return {
        type: EXIT
    };
}

export function tryExit() {
    return (dispatch) => {
        document.cookie = `login=''`; document.cookie = `signed=0`;
        dispatch(signOut());
    }
}


export function trySignIn(login, password) {

    return (dispatch) => {
        fetch('http://localhost:5000/users')

         .then((response) => response.json())
         .then ((response) => response.forEach( item =>
             {if((item.login === login)&&(item.password === password))
             {dispatch(signIn(login)); document.cookie = `login=${login}`; document.cookie = `signed=1`;}}));

    }
}

/*добавить сообщение об ошибке, если вход не выполнен*/