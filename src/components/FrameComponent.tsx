import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <footer className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.helpWrapper}>
          <div className={styles.help}>Help</div>
        </div>
        <div className={styles.howDoesIt}>How does it works ?</div>
        <div className={styles.frameContainer}>
          <div className={styles.whereDoYouAskQuesionWrapper}>
            <div className={styles.whereDoYou}>Where do you ask quesion ?</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.howToPayWrapper}>
              <div className={styles.howToPay}>How to pay ?</div>
            </div>
            <div className={styles.whatIsNeeded}>What is needed for this</div>
          </div>
        </div>
      </div>
      <div className={styles.contactParent}>
        <div className={styles.contact}>Contact</div>
        <div className={styles.frameWrapper}>
          <div className={styles.contactIconParent}>
            <div className={styles.contactIcon}>+91 7076857657545</div>
            <div className={styles.southUsmanContainer}>
              <p className={styles.southUsman}>174,south , usman Road</p>
              <p className={styles.tnagarChennai}>Tnagar, chennai</p>
              <p className={styles.p}>600028</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.platformWrapper}>
          <div className={styles.platform}>Platform</div>
        </div>
        <div className={styles.overwiew}>overwiew</div>
        <div className={styles.feature}>Feature</div>
        <div className={styles.pricing}>pricing</div>
        <div className={styles.aboutWrapper}>
          <div className={styles.about}>About</div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.resourceParent}>
          <h2 className={styles.resource}>Resource</h2>
          <div className={styles.buyANewContainer}>
            <p className={styles.buyANew}>
              buy a new domain name, you can set cookies on
            </p>
            <p className={styles.thatDomainWithin}>
              {" "}
              that domain within the boundaries of its security
            </p>
            <p className={styles.policies}> policies.</p>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.describeWrapper}>
            <div className={styles.describe}>Describe...</div>
          </div>
          <button className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.send}>Send</div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
