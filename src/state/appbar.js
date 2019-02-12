const LOGGED = 'appbar/LOGGED'
const UN_LOGGED = 'appbar/UN_LOGGED'

const INITIAL_STATE = {
    logged: false,
    userApp: null
}

export const LoginAction = () => ({
    type: LOGGED
})

export const UnLoggedAction = () => ({
    type: UN_LOGGED
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGGED:
            return {
                ...state,
                logged: true,
                userApp: "Witaj krystianpietr@gmail.com"
            }
        case UN_LOGGED:
            return {
                ...state,
                logged: false,
                userApp: null
            }
        default:
            return state
    }
}