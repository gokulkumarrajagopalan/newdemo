import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.landingpageImg11Parent}>
        <img
          className={styles.landingpageImg11Icon}
          loading="lazy"
          alt=""
          src="/landingpage-img1-1@2x.png"
        />
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.weHaveBeingImprovingOurPrWrapper}>
              <h1 className={styles.weHaveBeingContainer}>
                <p className={styles.weHaveBeing}>{`we have being `}</p>
                <p
                  className={styles.improvingOurProducts}
                >{`improving our products `}</p>
              </h1>
            </div>
            <div className={styles.buyANew}>
              buy a new domain name, you can set cookies on that domain within
              the boundaries of its security policies.
            </div>
            <div className={styles.buttonParent}>
              <div className={styles.button} />
              <b className={styles.getStarted}>Get Started</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
