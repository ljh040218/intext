import { useNavigate } from "react-router-dom";
import styles from "./InputDesign.module.css";
import ArrowIcon from "./ArrowIcon";

const ContentCard = ({ title, description, readMoreText = "Read more", itemId, onArrowClick }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // 프롬프트 상세 페이지로 이동하면서 데이터 전달
    navigate(`/prompt/${itemId}`, {
      state: {
        title,
        description
      }
    });
  };

  const handleArrowClick = (e) => {
    e.stopPropagation(); // 카드 클릭 이벤트 방지
    if (onArrowClick) {
      onArrowClick();
    }
    // 화살표 클릭해도 상세 페이지로 이동
    handleCardClick();
  };

  return (
    <article 
      className={styles.inputDesignContentCard}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div className={styles.inputDesignCardContent}>
        <h3 className={styles.inputDesignCardTitle}>{title}</h3>
        <p className={styles.inputDesignCardDescription}>{description}</p>
        <div className={styles.inputDesignReadMoreSection}>
          <div className={styles.inputDesignReadMoreLink}>
            <span className={styles.inputDesignReadMoreText}>{readMoreText}</span>
            <ArrowIcon onClick={handleArrowClick} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContentCard;