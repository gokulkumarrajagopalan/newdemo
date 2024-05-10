import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.reasonComparisonParent}>
      <div className={styles.reasonComparison}>
        <div className={styles.reasonComparisonChild} />
        <div className={styles.reasonItems}>
          <h1 className={styles.whyWeAreContainer}>
            <p className={styles.whyWe}>{`why we `}</p>
            <p className={styles.areBetter}>{`are better `}</p>
            <p className={styles.thanOthers}>{`than others `}</p>
          </h1>
        </div>
        <div className={styles.buyANewContainer}>
          <p className={styles.buyANew}>buy a new domain name, you ca</p>
          <p
            className={styles.nSetCookies}
          >{`n set cookies on that domain within `}</p>
          <p className={styles.theBoundariesOf}>
            the boundaries of its security policies.
          </p>
        </div>
      </div>
      <div className={styles.reasonComparison1}>
        <div className={styles.reasonComparisonItem} />
        <div className={styles.expirenceInThisTechnologyWrapper}>
          <h1 className={styles.expirenceInThisContainer}>
            <p className={styles.expirenceIn}>{`Expirence  in `}</p>
            <p className={styles.thisTechnology}>this technology</p>
          </h1>
        </div>
        <div className={styles.buyANewContainer1}>
          <p className={styles.buyANew1}>buy a new domain name, you ca</p>
          <p
            className={styles.nSetCookies1}
          >{`n set cookies on that domain within `}</p>
          <p className={styles.theBoundariesOf1}>
            the boundaries of its security policies.
          </p>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.weDoAllContainer}>
          <p className={styles.weDoAll}>we do all cross</p>
          <p className={styles.platformIntegration}>platform integration</p>
        </h1>
        <div className={styles.buyANewDomainNameYouCaWrapper}>
          <div className={styles.buyANewContainer2}>
            <p className={styles.buyANew2}>buy a new domain name, you ca</p>
            <p
              className={styles.nSetCookies2}
            >{`n set cookies on that domain within `}</p>
            <p className={styles.theBoundariesOf2}>
              the boundaries of its security policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
