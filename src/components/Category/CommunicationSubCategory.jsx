import React from 'react';
import SubCategoryTemplate from './SubCategoryTemplate';

const CommunicationSubCategory = () => {
  const subCategories = [
    {
      icon: '💬',
      name: '고민 상담',
      description: '개인 고민, 관계 상담',
      count: '24',
      navigateTo: '/prompts/counseling'
    },
    {
      icon: '💼',
      name: '취업 & 면접',
      description: '자기소개서, 면접 준비',
      count: '18',
      navigateTo: '/prompts/job-interview'
    },
    {
      icon: '🤝',
      name: '네트워킹',
      description: '인맥 관리, 소개팅 대화',
      count: '10',
      navigateTo: '/prompts/networking'
    },
    {
      icon: '⚖️',
      name: '갈등 해결',
      description: '중재, 협상, 설득',
      count: '4',
      navigateTo: '/prompts/conflict-resolution'
    }
  ];

  return (
    <SubCategoryTemplate 
      categoryTitle="소통 & 상담"
      subCategories={subCategories}
      mainColor="#06b6d4"
    />
  );
};

export default CommunicationSubCategory;