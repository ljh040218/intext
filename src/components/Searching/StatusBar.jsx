import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InputDesign.module.css";
import container from "./Container.svg"; // Container.svg 파일 import

const StatusBar = ({ time = "9:41" }) => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className={styles.inputDesignHeaderSection}>
      <div className={styles.inputDesignStatusBar}>
        <div className={styles.inputDesignTimeDisplay}>{time}</div>
        <img src={container} alt="" className={styles.inputDesignStatusIcons} />
      </div>
      <div className={styles.inputDesignTitleContainer}>
        <button className={styles.inputDesignBackBtn} onClick={handleBackClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default StatusBar;