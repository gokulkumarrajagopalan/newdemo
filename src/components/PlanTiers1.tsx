import { FunctionComponent } from "react";
import styles from "./PlanTiers1.module.css";

const PlanTiers1: FunctionComponent = () => {
  return (
    <div className={styles.planTiers}>
      <div className={styles.planTiersChild} />
      <div className={styles.frameParent}>
        <div className={styles.advanceWrapper}>
          <h1 className={styles.advance}>Advance</h1>
        </div>
        <div className={styles.buyANewDomainNameYouCanParent}>
          <div className={styles.buyANew}>
            buy a new domain name, you can set cookies on that domain within
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.parent}>
              <b className={styles.b}>$ 100</b>
              <div className={styles.monthWrapper}>
                <div className={styles.month}>/month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.planTiersInner}>
        <div className={styles.frameGroup}>
          <div className={styles.teenyiconstickCircleSolidParent}>
            <img
              className={styles.teenyiconstickCircleSolid}
              alt=""
              src="/teenyiconstickcirclesolid-2.svg"
            />
            <div className={styles.videosWrapper}>
              <div className={styles.videos}>Videos</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.teenyiconstickCircleSolidGroup}>
              <img
                className={styles.teenyiconstickCircleSolid1}
                alt=""
                src="/teenyiconstickcirclesolid.svg"
              />
              <div className={styles.hostng}>Hostng</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.teenyiconstickCircleSolidContainer}>
                <img
                  className={styles.teenyiconstickCircleSolid2}
                  alt=""
                  src="/teenyiconstickcirclesolid.svg"
                />
                <div className={styles.domainWrapper}>
                  <div className={styles.domain}>Domain</div>
                </div>
              </div>
              <div className={styles.maintenancePerksParent}>
                <div className={styles.maintenancePerks}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.xWrapper}>
                      <h2 className={styles.x}>x</h2>
                    </div>
                  </div>
                  <div className={styles.databaseWrapper}>
                    <div className={styles.database}>Database</div>
                  </div>
                </div>
                <div className={styles.maintenancePerks1}>
                  <div className={styles.maintenanceDetails}>
                    <div className={styles.maintenanceDetailsChild} />
                    <div className={styles.xContainer}>
                      <h2 className={styles.x1}>x</h2>
                    </div>
                  </div>
                  <div className={styles.maintenanceWrapper}>
                    <div className={styles.maintenance}>Maintenance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTiers1;
