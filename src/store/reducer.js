const initialState = {
    showModal: false,
    modalImgSrc: null,
    modalContent: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MODAL_DATA':
            console.log(action.payload.img)
            return {
                ...state,
                modalImgSrc: action.payload.img,
                modalContent: action.payload.content.content
            }

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