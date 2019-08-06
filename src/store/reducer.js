const initialState = {
    showModal: false,
    modalImgSrc: null,
    modalContent: null,
    modalType: null,
   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MODAL_DATA':
            return {
                ...state,
                modalImgSrc: action.payload.img,
                modalContent: action.payload.content,
                modalType: action.payload.type,

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