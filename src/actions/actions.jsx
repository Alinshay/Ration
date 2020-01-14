import {
    ENTRANCE,
    REGISTER,
    EXIT
} from './action-types';


function signIn(login) {
    return {
        type: ENTRANCE,
        login
    };
}

function signUp(login) {
    return {
        type: REGISTER,
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

export function trySignUp(login, password) {

    return (dispatch) => {
        fetch('http://localhost:5000/users')
            .then((response) => response.json());
            /*.then ((response) => response.forEach( item =>
            {if(item.login === login)
            return 'Такой логин уже существует!';
            }));*/

            let data = '&login=' + encodeURIComponent(login)+
            '&password=' + encodeURIComponent(password);

            const post_request = new XMLHttpRequest();
            post_request.open('POST','http://localhost:5000/user',true);
            post_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            post_request.send(data);
            dispatch(trySignIn(login, password));

    }
}

/*добавить сообщение об ошибке, если вход не выполнен*/