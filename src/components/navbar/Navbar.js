import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>BEACHES.</h2>
            </div>
            <ul className="nav-menu">
                <li><Link to='home' smooth={true} duration={500} >Home</Link></li>
                <li><Link to='destinations' smooth={true} duration={500} >Destinations</Link></li>
                <li><Link to='carousel' smooth={true} duration={500} >Travel</Link></li>
                <li><Link to='search' smooth={true} duration={500} >Book</Link></li>
                <li><Link to='views' smooth={true} duration={500} >Views</Link></li>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenu className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li><Link to='home' smooth={true} duration={500} >Home</Link></li>
                    <li><Link to='destinations' smooth={true} duration={500} >Destinations</Link></li>
                    <li><Link to='carousel' smooth={true} duration={500} >Travel</Link></li>
                    <li><Link to='search' smooth={true} duration={500} >Book</Link></li>
                    <li><Link to='views' smooth={true} duration={500} >Views</Link></li>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
