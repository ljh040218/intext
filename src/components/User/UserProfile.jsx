"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import IphoneXBarsStatus from "./IphoneXBarsStatus";
import ProfileHeader from './ProfileHeader';
import TabNavigation from './TabNavigation';
import PromptList from './PromptList';
import DirectWriteCarousel from './DirectWriteCarousel';
import "./user-styles.css";

function UserProfile() {
  const [activeTab, setActiveTab] = useState('recent'); // 탭 상태 관리

  return (
    <div className="user-profile-page-wrapper">
      <div className="user-container">
        {/* 상태바 */}
        <IphoneXBarsStatus />

        {/* 메인 콘텐츠 */}
        <main className="user-main-content">
          <ProfileHeader />
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <section className="prompt-section">
            <h2 className="prompt-list-title">
              프롬프트 리스트
            </h2>
            {/* 조건부 렌더링: 탭에 따라 다른 컴포넌트 표시 */}
            {activeTab === 'recent' ? (
              <PromptList />
            ) : (
              <DirectWriteCarousel />
            )}
          </section>
        </main>

        {/* 하단 네비게이션 */}
        <footer className="bottom-nav-user">
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
          <Link to="/saved" className="nav-item">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </Link>
          <div className="nav-item active">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default UserProfile;