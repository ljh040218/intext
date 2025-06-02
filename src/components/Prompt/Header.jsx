import styles from "./Prompt.module.css";
import back from "./ChevronLeft.svg";
import { useState } from "react";

function Header({ promptTitle = "프롬프트 제목\n길면 두 줄", promptDescription = "프롬프트 설명" }) {
  const [isSaved, setIsSaved] = useState(false);
  
  const handleSaveClick = () => {
    console.log('Save button clicked!');
    console.log('Current isSaved state:', isSaved);
    
    const newState = !isSaved;
    setIsSaved(newState);
    console.log('New saved state:', newState);
    
    if (newState) {
      alert("저장되었습니다.");
    } else {
      alert("저장이 해제되었습니다.");
    }
  };

  console.log('Header render - isSaved:', isSaved);
  console.log('Button classes:', `${styles.promptSaveButton} ${isSaved ? styles.promptSaveButtonActive : ''}`);

  return (
    <header>
      <img
        src={back}
        onClick={() => window.history.back()}
        className={styles.promptBackIcon}
        alt="Back"
      />
      <section className={styles.promptHeaderSection}>
        <h1 className={styles.promptTitleText}>
          {promptTitle}
        </h1>
        <button
          onClick={handleSaveClick}
          className={`${styles.promptSaveButton} ${isSaved ? styles.promptSaveButtonActive : ''}`}
          aria-label={isSaved ? "저장됨" : "저장하기"}
        >
          <svg 
            className={styles.promptSaveIcon} 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span className={styles.promptSaveText}>
            {isSaved ? "저장됨" : "저장하기"}
          </span>
        </button>
      </section>
    </header>
  );
}

export default Header;