import React from 'react'
import styles from './Footer.module.css';
import {Link} from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <section className={styles.footer_container}>
      <div className={styles.footer_wrap}>
        <article className={styles.footer_link_container}>
          <div className={styles.footer_link_wrapper}>
            <div className={styles.footer_link_items}>
              <h1 className={styles.footer_title}>About us</h1>
                <Link to='/'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Carrers</Link>
                <Link to='/'>Investor</Link>
                <Link to='/'>Terms of Service</Link>
            </div>
            <div className={styles.footer_link_items}>
              <h1 className={styles.footer_title}>Contact Us</h1>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
                <Link to='/'>Sponsorships</Link>
            </div>
          </div>

          <div className={styles.footer_link_wrapper}>
            <div className={styles.footer_link_items}>
              <h1 className={styles.footer_title}>Videos</h1>
                <Link to='/'>Submit Video</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencer</Link>
            </div>
            <div className={styles.footer_link_items}>
              <h1 className={styles.footer_title}>Social Media</h1>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
            </div>
          </div>
        </article>
        <article className={styles.social_media}>
          <div className={styles.social_media_wrap}>
            <Link className={styles.social_logo} to='/' onClick={toggleHome}>
              koo
            </Link>
            <address className={styles.website_rights}>koo © {new Date().getFullYear()} All rights reserved.</address>
            <div className={styles.social_icons}>
              <Link to='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </Link>
              <Link to='//www.instagram.com/leonardtcomdt/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </Link>
              <Link to='//www.youtube.com/channel/UCF6Cz50AqAJcg6JC5LDRElg/videos?view_as=subscriber' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </Link>
              <Link to='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </Link>
              <Link to='//www.linkedin.com/in/leonardtlauenstein/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Footer;