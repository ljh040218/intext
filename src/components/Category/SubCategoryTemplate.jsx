import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IphoneXBarsStatus } from './IphoneXBarsStatus';
import './search-styles.css';

const SubCategoryTemplate = ({ categoryTitle, subCategories, mainColor = "#2d0c57" }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/search');
  };

  const handleSubCategoryClick = (navigateTo) => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className="search-page-wrapper">
      <div className="search-container-wrapper">
        <IphoneXBarsStatus />
        
        {/* 헤더 */}
        <header className="subcategory-header">
          <button className="back-button" onClick={handleBackClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <h1 className="subcategory-title">{categoryTitle}</h1>
        </header>

        <main className="subcategory-main">
          {/* 검색 입력 */}
          <div className="search-container">
            <div className="search-input">
              <div className="input-content">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <div className="placeholder-text">세부 카테고리 검색</div>
              </div>
            </div>
          </div>

          {/* 서브 카테고리 리스트 */}
          <section className="subcategory-list">
            {subCategories.map((subCategory, index) => (
              <article 
                key={index} 
                className="subcategory-item"
                onClick={() => handleSubCategoryClick(subCategory.navigateTo)}
              >
                <div className="subcategory-content">
                  <div className="subcategory-icon" style={{ backgroundColor: `${mainColor}15` }}>
                    <div style={{ color: mainColor }}>{subCategory.icon}</div>
                  </div>
                  <div className="subcategory-info">
                    <h3 className="subcategory-name">{subCategory.name}</h3>
                    <p className="subcategory-description">{subCategory.description}</p>
                    <span className="subcategory-count">({subCategory.count})</span>
                  </div>
                  <div className="subcategory-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>
        
        {/* 하단 네비게이션 */}
        <footer className="bottom-nav">
          <Link to="/" className="nav-item">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </Link>
          <Link to="/search" className="nav-item active">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </Link>
          <Link to="/saved" className="nav-item">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </Link>
          <Link to="/profile" className="nav-item">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </Link>
        </footer>
      </div>

      <style>{`
        .subcategory-header {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          background-color: #fff;
          border-bottom: 1px solid #f0f0f0;
          margin-top: 54px;
        }

        .back-button {
          background: none;
          border: none;
          padding: 8px;
          margin-right: 12px;
          cursor: pointer;
          color: #19213d;
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }

        .back-button:hover {
          background-color: #f5f5f5;
        }

        .subcategory-title {
          font-family: 'Pretendard', -apple-system, sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #19213d;
          margin: 0;
        }

        .subcategory-main {
          padding: 0 20px;
          padding-bottom: 100px;
          height: calc(874px - 54px - 70px - 80px);
          overflow-y: auto;
        }

        .subcategory-main::-webkit-scrollbar {
          display: none !important;
        }

        .subcategory-list {
          margin-top: 20px;
        }

        .subcategory-item {
          background: #fff;
          border-radius: 12px;
          margin-bottom: 12px;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .subcategory-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-color: ${mainColor}30;
        }

        .subcategory-content {
          display: flex;
          align-items: center;
          padding: 16px;
        }

        .subcategory-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-right: 16px;
          flex-shrink: 0;
          position: relative;
        }

        .subcategory-icon > div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .subcategory-icon svg {
          display: block;
          margin: 0 auto;
        }

        .subcategory-info {
          flex: 1;
        }

        .subcategory-name {
          font-family: 'Pretendard', -apple-system, sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 4px 0;
        }

        .subcategory-description {
          font-family: 'Pretendard', -apple-system, sans-serif;
          font-size: 13px;
          color: #6b7280;
          margin: 0 0 4px 0;
          line-height: 1.3;
        }

        .subcategory-count {
          font-family: 'Pretendard', -apple-system, sans-serif;
          font-size: 12px;
          color: #9ca3af;
          font-weight: 500;
        }

        .subcategory-arrow {
          flex-shrink: 0;
          margin-left: 12px;
        }
      `}</style>
    </div>
  );
};

export default SubCategoryTemplate;