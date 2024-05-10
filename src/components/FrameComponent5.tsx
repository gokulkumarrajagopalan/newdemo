import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <nav className={styles.resourceParent}>
        <h2 className={styles.resource}>Resource</h2>
        <nav className={styles.homeParent}>
          <h2 className={styles.home}>Home</h2>
          <h2 className={styles.contact}>Contact</h2>
          <h2 className={styles.pricing}>Pricing</h2>
        </nav>
      </nav>
      <button className={styles.buttonParent}>
        <div className={styles.button} />
        <b className={styles.signin}>SignIn</b>
      </button>
    </header>
  );
};

export default FrameComponent5;
