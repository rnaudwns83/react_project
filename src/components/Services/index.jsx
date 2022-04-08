import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.services_container} id='services'>
      <h1 className={styles.services}>Our services</h1>
      <article className={styles.services_wrapper}>
        <div className={styles.services_card}>
          <img className={styles.services_icon} src={Icon1}  alt="a" />
          <h2 className={styles.services_title}>Reduce expenses</h2>
          <p className={styles.services_txt}>We help your fess and increase your overall revenue.</p>
        </div>
        <div className={styles.services_card}>
          <img className={styles.services_icon} src={Icon2} alt="a" />
          <h2 className={styles.services_title}>Virtual Offices</h2>
          <p className={styles.services_txt}>you can acess our plataform online anywhere in the world.</p>
        </div>
        <div className={styles.services_card}>
          <img className={styles.services_icon} src={Icon3} alt="a" />
          <h2 className={styles.services_title}>Reduce expenses</h2>
          <p className={styles.services_txt}>Unlock our special membership card that returns 5% cash back.</p>
        </div>
      </article>
    </section>
  )
}

export default Services;
