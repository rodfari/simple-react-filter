import React, { useEffect, useState } from 'react'
import './Modal.sass'

const Modal = ( { trigger } ) => {

    const [isVisible, setIsVisible] = useState();

    const hideModal = () => {
        setIsVisible(false);
    };
    useEffect(() => {
        trigger(setIsVisible(true));
    },[trigger]); 

return (
        <div className={`${ isVisible ? '' : 'hidden'} modal`}>
                <div className='modal-content'>
                        <h2>Modal</h2>
                        <p>This is a modal</p>
                        <button onClick={hideModal}>Close</button>
                </div>
        </div>
)
}

export default Modal