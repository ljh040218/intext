import { useNavigate } from "react-router-dom";
import styles from "./SettingsPage.module.css";
import container from "./Container.svg";

function SettingsHeader() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className={styles.headerSection}>
      <div className={styles.statusBar}>
        <div className={styles.timeDisplay}>9:41</div>
        <img src={container} alt="" className={styles.statusIcons} />
      </div>
      <div className={styles.titleContainer}>
        <button className={styles.backBtn} onClick={handleBackClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className={styles.pageTitle}>환경 설정</h1>
      </div>
    </header>
  );
}

export default SettingsHeader;