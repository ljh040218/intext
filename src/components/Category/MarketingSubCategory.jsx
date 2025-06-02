import React from 'react';
import SubCategoryTemplate from './SubCategoryTemplate';

const MarketingSubCategory = () => {
  const subCategories = [
    {
      icon: '🎯',
      name: '광고 & 카피',
      description: '광고 문구, 슬로건, 헤드라인',
      count: '11',
      navigateTo: '/prompts/advertising-copy'
    },
    {
      icon: '🛍️',
      name: '상품 관련',
      description: '상품 설명, 리뷰 작성',
      count: '8',
      navigateTo: '/prompts/product-content'
    },
    {
      icon: '👥',
      name: '고객 응대',
      description: 'CS 응답, 문의 처리',
      count: '6',
      navigateTo: '/prompts/customer-service'
    },
    {
      icon: '🏢',
      name: '브랜딩',
      description: '브랜드 스토리, 미션 비전',
      count: '3',
      navigateTo: '/prompts/branding'
    }
  ];

  return (
    <SubCategoryTemplate 
      categoryTitle="마케팅 & 비즈니스"
      subCategories={subCategories}
      mainColor="#10b981"
    />
  );
};

export default MarketingSubCategory;