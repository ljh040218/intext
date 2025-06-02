"use client";
import { Link, useNavigate } from 'react-router-dom';
import { IphoneXBarsStatus } from './IphoneXBarsStatus';
import './search-styles.css';

// 이미지 import
import misinformationImg from './image/misinformation.jpg';
import writingImg from './image/writing.jpg';
import marketingImg from './image/marketing.jpg';
import counselingImg from './image/counseling.jpg';
import learningImg from './image/learning.jpg';
import researchImg from './image/research.jpg';
import makeImg from './image/make.jpg';
import workImg from './image/work.jpg';

const CategorySearch = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    console.log('프로필 버튼 클릭됨!');
    navigate('/profile');
  };

  const categoryData = [
  [
    { imageUrl: researchImg, title: '개발 & 기술', count: '43', navigateTo: '/subcategory/development-tech' },
    { imageUrl: writingImg, title: '글쓰기 & 창작', count: '32', isSpecialCard: true, navigateTo: '/subcategory/writing-creative' }],
  [
    { imageUrl: marketingImg, title: '마케팅 & 비즈니스', count: '22', isSpecialCard: true, navigateTo: '/subcategory/marketing-business' },
    { imageUrl: workImg, title: '업무 효율', count: '32', isSpecialCard: true, navigateTo: '/subcategory/work-efficiency' } ],
  [
    { imageUrl: counselingImg, title: '소통 & 상담', count: '56', navigateTo: '/subcategory/communication-counseling' },
    { imageUrl: makeImg, title: '창의적 작업', count: '43', navigateTo: '/subcategory/creative-work' }],
  [
    { imageUrl: misinformationImg, title: '품질 관리', count: '43', navigateTo: '/subcategory/quality-control' },
    { imageUrl: learningImg, title: '학습 & 분석', count: '43', navigateTo: '/subcategory/learning-analysis' }]
];

  return (
    <div className="search-page-wrapper">
      <div className="search-container-wrapper">
        <IphoneXBarsStatus />
        <main className="main-content">
          <h1 className="page-title">카테고리</h1>
          {/* 검색 입력 */}
          <div className="search-container">
            <div className="search-input">
              <div className="input-content">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <div className="placeholder-text">검색</div>
              </div>
            </div>
          </div>
          <section className="category-grid">
            {categoryData.map((row, rowIndex) => (
              <div key={rowIndex} className={`grid-row ${rowIndex === 2 ? 'special-row' : ''}`}>
                {row.map((category, cardIndex) => (
                  <article key={`${rowIndex}-${cardIndex}`} className="category-card" onClick={() => category.navigateTo && navigate(category.navigateTo)}>
                    <div className="card-content">
                      <div className="card-border">
                        <img
                          src={category.imageUrl}
                          className="category-image"
                          alt={category.title}
                        />
                        <div className={`card-info ${category.isSpecialCard ? 'special' : ''}`}>
                          <h3 className={`category-title ${category.titleColor === '#2d0c57' ? 'special-color' : ''}`}>
                            {category.title}
                          </h3>
                          <p className="category-count">({category.count})</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </section>
        </main>
        <footer className="bottom-nav">
          <Link to="/" className="nav-item">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </Link>
          <div className="nav-item active">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <Link to="/saved" className="nav-item">
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
};

export default CategorySearch;