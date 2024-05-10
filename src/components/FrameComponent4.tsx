import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.developYouSkillsWrapper}>
            <h2 className={styles.developYouSkills}>{`DEVELOP YOU SKILLS `}</h2>
          </div>
          <h2 className={styles.withoutDeligence}>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.withoutDeligence1}>WITHOUT DELIGENCE</p>
          </h2>
        </div>
        <div className={styles.buyANewDomainNameYouCanWrapper}>
          <b className={styles.buyANewContainer}>
            <p
              className={styles.buyANew}
            >{`buy a new domain name, you can set cookies on that domain within `}</p>
            <p
              className={styles.theBoundariesOf}
            >{`the boundaries of its security policies. When you purchase a new domain, `}</p>
            <p className={styles.youHaveControl}>
              you have control over its setting
            </p>
          </b>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.buttonParent}>
              <div className={styles.button} />
              <b className={styles.getStarted}>Get Started</b>
            </div>
            <div className={styles.buttonGroup}>
              <div className={styles.button1} />
              <b className={styles.discount}>Discount</b>
            </div>
          </div>
        </div>
        <img
          className={styles.vectaryTextureIcon}
          loading="lazy"
          alt=""
          src="/vectary-texture@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
