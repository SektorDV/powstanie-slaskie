import React from 'react';
import './Modal.scss';
import {connect, dispatch} from 'react-redux';


const Modal = props => {
    return(
        <div onClick={props.switchOffModal} className="ps__curtain">
            <div className="ps__modalwindow">
                <div className="ps__modalwindow__left">

                </div>
                <div className="ps__modalwindow__right">

                </div>

            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        switchOffModal: () => dispatch({type: 'SWITCH_OFF_MODAL'})
    }
}

export default connect(null, mapDispatchToProps)(Modal);