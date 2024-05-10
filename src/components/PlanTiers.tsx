import { FunctionComponent } from "react";
import styles from "./PlanTiers.module.css";

const PlanTiers: FunctionComponent = () => {
  return (
    <div className={styles.planTiers}>
      <img className={styles.planTiersChild} alt="" src="/rectangle-8.svg" />
      <div className={styles.frameParent}>
        <div className={styles.premiumWrapper}>
          <h1 className={styles.premium}>Premium</h1>
        </div>
        <div className={styles.buyANewDomainNameYouCanParent}>
          <div className={styles.buyANew}>
            buy a new domain name, you can set cookies on that domain within
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.parent}>
              <b className={styles.b}>$ 200</b>
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
              src="/teenyiconstickcirclesolid.svg"
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
            <div className={styles.bottomMaintenancePerkParent}>
              <div className={styles.bottomMaintenancePerk}>
                <img
                  className={styles.teenyiconstickCircleSolid2}
                  alt=""
                  src="/teenyiconstickcirclesolid.svg"
                />
                <div className={styles.domainWrapper}>
                  <div className={styles.domain}>Domain</div>
                </div>
              </div>
              <div className={styles.bottomMaintenancePerk1}>
                <img
                  className={styles.teenyiconstickCircleSolid3}
                  alt=""
                  src="/teenyiconstickcirclesolid.svg"
                />
                <div className={styles.databaseWrapper}>
                  <div className={styles.database}>Database</div>
                </div>
              </div>
              <div className={styles.bottomMaintenancePerk2}>
                <img
                  className={styles.teenyiconstickCircleSolid4}
                  alt=""
                  src="/teenyiconstickcirclesolid.svg"
                />
                <div className={styles.maintenanceWrapper}>
                  <div className={styles.maintenance}>Maintenance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanTiers;
