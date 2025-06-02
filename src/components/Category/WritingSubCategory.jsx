import React from 'react';
import SubCategoryTemplate from './SubCategoryTemplate';

const WritingSubCategory = () => {
  const subCategories = [
    {
      icon: '📰',
      name: '콘텐츠 작성',
      description: '블로그, 기사, 포스팅',
      count: '15',
      navigateTo: '/prompts/content-writing'
    },
    {
      icon: '💭',
      name: '아이디어 발상',
      description: '브레인스토밍, 주제 확장',
      count: '9',
      navigateTo: '/prompts/idea-generation'
    },
    {
      icon: '📖',
      name: '스토리텔링',
      description: '시나리오, 스토리 구성',
      count: '6',
      navigateTo: '/prompts/storytelling'
    },
    {
      icon: '✏️',
      name: '문체 개선',
      description: '교정, 윤문, 톤앤매너',
      count: '4',
      navigateTo: '/prompts/writing-improvement'
    }
  ];

  return (
    <SubCategoryTemplate 
      categoryTitle="글쓰기 & 창작"
      subCategories={subCategories}
      mainColor="#f59e0b"
    />
  );
};

export default WritingSubCategory;