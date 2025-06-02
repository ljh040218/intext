"use client";
import { Link, useNavigate } from "react-router-dom";
import { IphoneXBarsStatus } from "./IphoneXBarsStatus";
import { useSavedPrompts } from "./SavedPromptsContext";
import icon from "./icon.svg";
import "./saved-styles.css";

function SavedPromptsScreen() {
  const navigate = useNavigate();
  const { savedPrompts, removeSavedPrompt } = useSavedPrompts();

  const handleProfileClick = () => {
    console.log('프로필 버튼 클릭됨!');
    navigate('/profile');
  };

  const handleRemovePrompt = (promptTitle) => {
    if (window.confirm('저장된 프롬프트를 삭제하시겠습니까?')) {
      removeSavedPrompt(promptTitle);
    }
  };

  return (
    <div className="saved-page-wrapper">
      <div className="saved-container">
        {/* 상태바 - 기존 컴포넌트 사용 */}
        <IphoneXBarsStatus />

        {/* 헤더 액션 */}
        <div className="header-actions">
          <button className="direct-write-btn">
            + 직접 작성
          </button>
          <button className="sort-btn">
            <img src={icon} alt="Sort" className="sort-icon" />
          </button>
        </div>

        {/* 메인 콘텐츠 */}
        <main className="main-content-saved">
          <h1 className="page-title">저장한 프롬프트</h1>
          
          {/* 검색 입력 */}
          <div className="search-container">
            <div className="search-input-wrapper">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="검색"
                className="search-input"
              />
            </div>
          </div>

          {/* 프롬프트 카드 리스트 */}
          <div className="prompt-card-list">
            {savedPrompts.length === 0 ? (
              <div className="empty-state">
                <p>저장한 프롬프트가 없습니다.</p>
                <p>프롬프트를 저장해보세요!</p>
              </div>
            ) : (
              savedPrompts.map((prompt, index) => (
                <article key={index} className="prompt-card">
                  <div className="prompt-content">
                    <div className="prompt-header">
                      <h3 className="prompt-title">{prompt.title}</h3>
                      <button 
                        className="remove-btn"
                        onClick={() => handleRemovePrompt(prompt.title)}
                        title="저장 해제"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                    <p className="prompt-description">{prompt.description}</p>
                    <div className="prompt-meta">
                      <span className="saved-date">
                        저장일: {new Date(prompt.savedAt).getMonth() + 1}월 {new Date(prompt.savedAt).getDate()}일
                      </span>
                    </div>
                    <button className="read-more-btn">
                      <span>Read more</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </main>

        {/* 하단 네비게이션 */}
        <footer className="bottom-nav-saved">
          <Link to="/" className="nav-item">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </Link>
          <Link to="/search" className="nav-item">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </Link>
          <Link to="/saved" className="nav-item active">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </Link>
          <div className="nav-item" onClick={handleProfileClick}>
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SavedPromptsScreen;