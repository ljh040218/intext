import styles from "./Prompt.module.css";

function ContentCard() {
  return (
    <article className={styles.promptContentCard}>
      <div className={styles.promptContentText}>
        내용에 따라서 크기가 조절 되도록
      </div>
    </article>
  );
}

export default ContentCard;