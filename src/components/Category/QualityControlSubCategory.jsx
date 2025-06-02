import React from 'react';
import SubCategoryTemplate from './SubCategoryTemplate';

const QualityControlSubCategory = () => {
  const subCategories = [
    {
      icon: '🛡️',
      name: '거짓정보 방지',
      description: '팩트체크 요청, 검증',
      count: '15',
      navigateTo: '/prompts/misinformation-prevention'
    },
    {
      icon: '✅',
      name: '사실 확인',
      description: '정보 검증, 신뢰도 체크',
      count: '12',
      navigateTo: '/prompts/fact-checking'
    },
    {
      icon: '🎯',
      name: '프롬프트 최적화',
      description: '성능 개선, 효율성',
      count: '10',
      navigateTo: '/prompts/prompt-optimization'
    },
    {
      icon: '📏',
      name: '품질 평가',
      description: '결과 검토, 개선점 도출',
      count: '6',
      navigateTo: '/prompts/quality-assessment'
    }
  ];

  return (
    <SubCategoryTemplate 
      categoryTitle="품질 관리"
      subCategories={subCategories}
      mainColor="#dc2626"
    />
  );
};

export default QualityControlSubCategory;