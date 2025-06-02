import React from 'react';
import SubCategoryTemplate from './SubCategoryTemplate';

const LearningSubCategory = () => {
  const subCategories = [
    {
      icon: '📖',
      name: '요약 & 정리',
      description: '텍스트 요약, 핵심 추출',
      count: '18',
      navigateTo: '/prompts/summary'
    },
    {
      icon: '🌐',
      name: '번역 & 언어',
      description: '번역, 언어 학습',
      count: '12',
      navigateTo: '/prompts/translation'
    },
    {
      icon: '🔍',
      name: '자료 검색',
      description: '정보 수집, 리서치',
      count: '9',
      navigateTo: '/prompts/research'
    },
    {
      icon: '📊',
      name: '데이터 분석',
      description: '통계 해석, 인사이트 도출',
      count: '4',
      navigateTo: '/prompts/data-analysis'
    }
  ];

  return (
    <SubCategoryTemplate 
      categoryTitle="학습 & 분석"
      subCategories={subCategories}
      mainColor="#8b5cf6"
    />
  );
};

export default LearningSubCategory;