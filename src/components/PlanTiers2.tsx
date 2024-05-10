import { FunctionComponent } from "react";
import styles from "./PlanTiers2.module.css";

const PlanTiers2: FunctionComponent = () => {
  return (
    <div className={styles.planTiers}>
      <div className={styles.planTiersChild} />
      <div className={styles.planFeatures}>
        <div className={styles.tierNames}>
          <h1 className={styles.start}>Start</h1>
        </div>
        <div className={styles.tierDomains}>
          <div className={styles.buyANew}>
            buy a new domain name, you can set cookies on that domain within
          </div>
          <div className={styles.tierDetails}>
            <div className={styles.tierMarks}>
              <b className={styles.markIcons}>$ 50</b>
              <div className={styles.billingCycles}>
                <div className={styles.month}>/month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.teenyiconstickCircleSolid} />
      <div className={styles.teenyiconstickCircleSolid1} />
      <div className={styles.tierPerks}>
        <div className={styles.videoPerks}>
          <div className={styles.videoDetails}>
            <img
              className={styles.teenyiconstickCircleSolid2}
              loading="lazy"
              alt=""
              src="/teenyiconstickcirclesolid.svg"
            />
            <div className={styles.videoLabels}>
              <div className={styles.videos}>Videos</div>
            </div>
          </div>
          <div className={styles.hostingPerks}>
            <div className={styles.hostingDetails}>
              <img
                className={styles.teenyiconstickCircleSolid3}
                alt=""
                src="/teenyiconstickcirclesolid.svg"
              />
              <div className={styles.hostng}>Hostng</div>
            </div>
            <div className={styles.domainPerks}>
              <div className={styles.domainDetails}>
                <div className={styles.domainIcons} />
                <div className={styles.domainLabels}>
                  <h2 className={styles.x}>x</h2>
                </div>
              </div>
              <div className={styles.databasePerks}>
                <div className={styles.domain}>Domain</div>
              </div>
            </div>
            <div className={styles.databaseIconParent}>
              <div className={styles.databaseIcon}>
                <div className={styles.databaseMark} />
                <div className={styles.databaseCross}>
                  <h2 className={styles.x1}>x</h2>
                </div>
              </div>
              <div className={styles.databaseDetails}>
                <div className={styles.database}>Database</div>
              </div>
            </div>
            <div className={styles.maintenanceIconParent}>
              <div className={styles.maintenanceIcon}>
                <div className={styles.maintenanceMark} />
                <div className={styles.maintenanceCross}>
                  <h2 className={styles.x2}>x</h2>
                </div>
              </div>
              <div className={styles.maintenance}>Maintenance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTiers2;
