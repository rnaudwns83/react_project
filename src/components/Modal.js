import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import './ModalStyles.css'
import modal from '../assets/modal.jpg'

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <div className='background' onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className='modalWrapper' showModal={showModal}>
              <img className='modalImg' src={modal} alt='camera' />
              <div className='modalContent'>
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Join Now</button>
              </div>
              <MdClose className='closeModalbutton'
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};