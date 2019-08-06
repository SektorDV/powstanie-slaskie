const initialState = {
    showModal: false,
    modalImgSrc: null,
    modalContent: null,
    modalType: null,
    audioContent: null,
    videoContent: null,
    mapContent: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MODAL_DATA':
            return {
                ...state,
                modalImgSrc: action.payload.img,
                modalContent: action.payload.content,
                modalType: action.payload.type,
                audioContent: action.payload.audio,
                videoContent: action.payload.video,
                mapContent: action.payload.map
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