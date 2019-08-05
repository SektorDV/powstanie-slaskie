import React, {useEffect, useState} from 'react';
import './Modal.scss';
import {connect, dispatch} from 'react-redux';
import MaterialIcon from 'material-icons-react';

const Modal = props => {
    const [modalOpacity, setModalOpacity] = useState(0)
    useEffect(() => {
        setModalOpacity(1);
    }, [])
    
    
    return(
            <div className="ps__modalwindow" style={{opacity: modalOpacity}}>
                <div className="ps__modalclose">
                    <MaterialIcon onClick={() => {
                        setModalOpacity(0);
                        setTimeout(() => {
                            props.switchOffModal();
                        }, 300)
                        }} icon="clear" />
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
        switchOffModal: () => {
            dispatch({type: 'SWITCH_OFF_MODAL'})
        }
    }
}

export default connect(null, mapDispatchToProps)(Modal);