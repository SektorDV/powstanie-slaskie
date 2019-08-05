import React from 'react';
import './Modal.scss';
import {connect, dispatch} from 'react-redux';
import MaterialIcon from 'material-icons-react';

const Modal = props => {
    return(
            <div className="ps__modalwindow">
                <div className="ps__modalclose">
                    <MaterialIcon onClick={props.switchOffModal} icon="clear" />
                </div>
                <div className="ps__modalwindow__left">
                </div>
                <div className="ps__modalwindow__right">
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