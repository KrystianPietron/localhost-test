const LOGGED = 'appbar/LOGGED'
const UN_LOGGED = 'appbar/UN_LOGGED'

const INITIAL_STATE = {
    logged: true,
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
            }
        case UN_LOGGED:
            return {
                ...state,
                logged: false,
            }
        default:
            return state
    }
}