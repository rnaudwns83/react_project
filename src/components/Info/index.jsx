import React from "react";
import styles from './Info.module.css';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoRow, Heading, Subtitle, Img, ImgWrap } from './InfoElements'

const Info = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2 }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} className={styles.info_container}>        
        <article className={styles.info_wrapper}>          
          <InfoRow className={styles.info_row} imgStart={imgStart}>              
            <div className={styles.column_1}>
              <div className={styles.text_wrapper}>
                <p className={styles.top_line}>{topLine}</p>
                <Heading className={styles.title} lightText={lightText}>{headline}</Heading>
                <Subtitle className={styles.txt} darkText={darkText}>{description}</Subtitle>
                <div className={styles.btn_wrap}>
                  <Button to='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.column_2}>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </div>
          </InfoRow>
        </article>
      </InfoContainer>
    </>
  );
};

export default Info;