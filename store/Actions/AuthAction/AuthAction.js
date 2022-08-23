import { URL_AUTH_SIGIN, URL_AUTH_SIGNUP } from '../../../Constants/DataBase/DataBase';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGNUP, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        });

        if(!response.ok) {
            const errorResponse = await response.json();
            const errorID = errorResponse.error.message;

            let message = 'It was not possible to register';
            if ( errorID === 'EMAIL_EXISTS') message = 'Email already exists';

            console.log(message)
        }

        const data = await response.json();

        dispatch({
            type: SIGNUP,
            token: data.idToken,
            userId: data.localId,
        })
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGIN, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        });

        if(!response.ok) {
            const errorResponse = await response.json();
            console.log(errorResponse)
            const errorID = errorResponse.error.message;

            let message = 'It is not possible to Login';
            if ( errorID === 'EMAIL_NOT_FOUND') message = 'Email does not exists';
            if ( errorID === 'INVALID_PASSWORD') message = 'Incorrect Password';

            console.log(message)
        }

        const data = await response.json();

        dispatch({
            type: LOGIN,
            token: data.idToken,
            userId: data.localId,
        })
    }
}