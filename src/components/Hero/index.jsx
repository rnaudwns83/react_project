import React, { useState } from "react";
import styles from './Hero.module.css';
import Video from '../../videos/video.mp4';
import styled from 'styled-components';
import { ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';


const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <section className={styles.hero_container}>
        <div className={styles.hero_bg}>
          <video className={styles.video_bg} autoPlay loop muted>
            <source src={Video} type='video/mp4' />
          </video>
        </div>
        <div className={styles.hero_content}>
          <h1 className={styles.title}>'창조적인 프론트엔드'</h1>
          <p className={styles.txt}>그동안 배우고 익혀온 여러가지 이론들을 기초로 하여 직무와 관련된 학습을 통해 저의 역량을 성장 시키 겠습니다. </p>
          <div className={styles.hero_btn_wrapper}>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;