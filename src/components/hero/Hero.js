import React, { useState } from 'react';
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { Modal } from '../../components/Modal';
import Video from '../../assets/maldivesVideo.mp4'

function Hero() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
        <div className='hero'>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <button className='modalButton' onClick={openModal}>Modal</button>
                <h1>First Class Travel</h1>
                <h2>Top 1% Locations Worldwide</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>        
        </>
    )
}

export default Hero
