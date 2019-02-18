const OPEN_DRAWER = "drawer/OPEN_DRAWER"
const CLOSE_DRAWER = "drawer/CLOSE_DRAWER"

const INITIAL_STATE = {
    openDrawer: false
}

export const openDrawerAction = () => ({
    type: OPEN_DRAWER
})

export const closeDrawerAction = () => ({
    type: CLOSE_DRAWER
})
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_DRAWER:
            return {
                ...state,
                openDrawer: true
            }
        case CLOSE_DRAWER:
            return {
                ...state,
                openDrawer: false
            }
        default:
            return state
    }
}