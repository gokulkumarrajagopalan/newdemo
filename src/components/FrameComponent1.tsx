import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.desktop1Inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.hereAllOurPlansWrapper}>
            <h1 className={styles.hereAllOur}>{`Here all our plans `}</h1>
          </div>
          <div className={styles.onOtherHandContainer}>
            <p
              className={styles.onOtherHand}
            >{`on other hand buy a new domain name, you can set cookies on that domain within  the `}</p>
            <p className={styles.boundariesOfIts}>
              {" "}
              boundaries of its security policies.
            </p>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.monthlyParent}>
            <h2 className={styles.monthly}>Monthly</h2>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/ellipse-1.svg"
                />
              </div>
              <h1 className={styles.yearly}>Yearly</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
