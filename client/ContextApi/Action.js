export const NewSearch = (credentials) =>( {
    type: 'NEW_SEARCH',
    payload: credentials,
});

export const ResetSearch = () => ({
    type: 'RESET_SEARCH',
})

export const LoginStart = ({userCredentials}) => ({
    type: 'LOGIN_START',
})

export const LoginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
})

export const LoginFailure = () => ({
    type: 'LOGIN_FAILURE',
})

export const LogOut = () => ({
    type: 'LOG_OUT',
})