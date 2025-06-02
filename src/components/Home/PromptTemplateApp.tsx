"use client";
import { useNavigate } from 'react-router-dom';
import { TopicCard } from "./TopicCard";
import { TemplateCard } from "./TemplateCard";
import { IphoneXBarsStatus } from "./IphoneXBarsStatus";
import "./home-style.css";

export default function PromptTemplateApp() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home-page-wrapper">
      <div className="home-container">
        {/* 상태바 */}
        <IphoneXBarsStatus />

        {/* 메인 콘텐츠 */}
        <main className="main-content">
          {/* 헤더 */}
          <header className="header">
            <h1 className="logo">intext</h1>
            <p className="tagline">
              필요한 프롬프트를<br />
              더 빠르게.
            </p>
          </header>

          {/* 빠른 주제 선택 */}
          <section className="topic-section">
            <h2 className="section-title">빠른 주제 선택</h2>
            <div className="topic-grid">
              <TopicCard title="이미지 생성" bgColor="bg-pink-50" />
              <TopicCard title="학습" bgColor="bg-sky-50" />
              <TopicCard title="자료 정리" bgColor="bg-green-50" />
              <TopicCard title="마케팅" bgColor="bg-stone-50" />
            </div>
          </section>

          {/* 빠른 프롬프트 템플릿 */}
          <section className="template-section">
            <h2 className="section-title">빠른 프롬프트 템플릿</h2>
            <div className="template-list">
              <TemplateCard
                title="아이디어 문구 생성"
                description="재치 있는 신선한 [문장/카피] 프롬프트"
                promptText="재치 있는 신선한 [문장/카피] 프롬프트"
              />
              <TemplateCard
                title="전문가 토론 가상 대화"
                description="[분야]의 전문가들이 [주제]에 대해 토론하는 가상 라운드 테이블 대화 프롬프트"
                promptText="[분야]의 전문가들이 [주제]에 대해 토론하는 가상 라운드 테이블 대화 프롬프트"
              />
              <TemplateCard
                title="블로그 글 도입부 작성"
                description="[특정 주제]에 관한 글을 작성하는 프롬프트"
                promptText="[특정 주제]에 관한 글을 작성하는 프롬프트"
              />
            </div>
          </section>
        </main>

        {/* 하단 네비게이션 */}
        <footer className="bottom-nav">
          <div className="nav-item active" onClick={() => handleNavigation('/')}>
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <div className="nav-item" onClick={() => handleNavigation('/search')}>
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <div className="nav-item" onClick={() => handleNavigation('/saved')}>
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div className="nav-item" onClick={() => handleNavigation('/profile')}>
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </footer>
      </div>
    </div>
  );
}