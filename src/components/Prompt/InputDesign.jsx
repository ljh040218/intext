import { useParams, useLocation } from 'react-router-dom';
import styles from "./Prompt.module.css";
import IphoneXBarsStatus from "./StatusBar";
import Header from "./Header";
import ContentCard from "./ContentCard";
import CopyButton from "./CopyButton";
import BottomIndicator from "./BottomIndicator";

function InputDesign() {
  const { id } = useParams(); // URL에서 ID 가져오기
  const location = useLocation(); // state로 전달된 데이터 가져오기
  
  // location.state에서 전달받은 데이터 또는 기본값 사용
  const promptData = {
    title: location.state?.title || "아이디어 문구 생성",
    description: location.state?.description || "재치 있는 신선한 문장/카피 프롬프트"
  };

  return (
    <div className={styles.promptContainer}>
      <div className={styles.promptPhoneFrame}>
        <IphoneXBarsStatus />
        <main className={styles.promptMainContent}>
          <Header 
            promptTitle={promptData.title}
            promptDescription={promptData.description}
          />
          <ContentCard />
          <CopyButton />
        </main>
        <BottomIndicator />
      </div>
    </div>
  );
}

export default InputDesign;