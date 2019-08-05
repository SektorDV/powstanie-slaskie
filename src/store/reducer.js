const initialState = {
    showModal: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_ON_MODAL':
            return {
                ...state,
                showModal: true
            }
        case 'SWITCH_OFF_MODAL':
            return {
                ...state,
                showModal: false
            }
        default:
            return state;
    }
}

export default reducer;