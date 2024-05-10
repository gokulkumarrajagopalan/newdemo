import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import PlanTiers2 from "../components/PlanTiers2";
import PlanTiers1 from "../components/PlanTiers1";
import PlanTiers from "../components/PlanTiers";
import FrameComponent from "../components/FrameComponent";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <section className={styles.frameParent}>
        <FrameComponent5 />
        <FrameComponent4 />
      </section>
      <section className={styles.desktop1Inner}>
        <div className={styles.frameGroup}>
          <FrameComponent3 />
          <FrameComponent2 />
        </div>
      </section>
      <FrameComponent1 />
      <section className={styles.desktop1Child}>
        <div className={styles.planTiersParent}>
          <PlanTiers2 />
          <PlanTiers1 />
          <PlanTiers />
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default Desktop;
