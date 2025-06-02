import styles from "./Prompt.module.css";
import container from "./Container.svg";

const IphoneXBarsStatus = () => {
  return (
    <div className={styles.promptStatusBar}>
      <div className={styles.promptStatusAction}>
        <div className={styles.promptStatusTime}>9:41</div>
      </div>

      <div className={styles.promptStatusIconContainer}>
        <img
          className={styles.promptStatusIcons}
          alt="Status icons"
          src={container}
        />
      </div>
    </div>
  );
};

export default IphoneXBarsStatus;