import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryGrid = () => {
  const categoryData = [
    { imageUrl: './image/misinformation.jpg', title: '품질 관리', count: '43', navigateTo: '/inputdesign' },
    { imageUrl: './image/writing.jpg', title: '글쓰기& 창작', count: '32', isSpecialCard: true },
    { imageUrl: './image/marketing.jpg', title: '마케팅 & 비즈니스', count: '22', isSpecialCard: true },
    { imageUrl: './image/counseling.jpg', title: '소통 & 상담', count: '56' },
    { imageUrl: './image/learning.jpg', title: '학습 & 분석', count: '43', titleColor: '#2d0c57' },
    { imageUrl: './image/research.jpg', title: '개발 & 기술', count: '43', titleColor: '#2d0c57' },
    { imageUrl: './image/make.jpg', title: '창의적 작업', count: '43' },
    { imageUrl: './image/work.jpg', title: '업무 효율', count: '32', isSpecialCard: true }
  ];

  return (
    <section className="category-grid">
      {categoryData.map((category, index) => (
        <CategoryCard
          key={index}
          imageUrl={category.imageUrl}
          title={category.title}
          count={category.count}
          titleColor={category.titleColor}
          isSpecialCard={category.isSpecialCard}
          navigateTo={category.navigateTo}
        />
      ))}
      <style jsx>{`
        .category-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 54px;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }
        
        @media (max-width: 768px) {
          .category-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default CategoryGrid;