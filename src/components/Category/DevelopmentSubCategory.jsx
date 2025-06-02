import React from 'react';
import SubCategoryTemplate from './SubCategoryTemplate';

const DevelopmentSubCategory = () => {
  const subCategories = [
    {
      icon: '🔧',
      name: '코드 작성',
      description: '함수 생성, 알고리즘',
      count: '22',
      navigateTo: '/prompts/code-writing'
    },
    {
      icon: '🐛',
      name: '디버깅 & 리뷰',
      description: '오류 수정, 코드 검토',
      count: '14',
      navigateTo: '/prompts/debugging'
    },
    {
      icon: '📋',
      name: '문서화',
      description: 'API 문서, 주석 작성',
      count: '8',
      navigateTo: '/prompts/documentation'
    },
    {
      icon: '🏗️',
      name: '설계 & 아키텍처',
      description: '시스템 설계, DB 구조',
      count: '5',
      navigateTo: '/prompts/architecture'
    }
  ];

  return (
    <SubCategoryTemplate 
      categoryTitle="개발 & 기술"
      subCategories={subCategories}
      mainColor="#ef4444"
    />
  );
};

export default DevelopmentSubCategory;