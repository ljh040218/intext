import React from 'react';
import SubCategoryTemplate from './SubCategoryTemplate';

const CreativeSubCategory = () => {
  const subCategories = [
    {
      icon: '🖼️',
      name: '이미지 생성',
      description: 'AI 이미지 프롬프트',
      count: '16',
      navigateTo: '/prompts/image-generation'
    },
    {
      icon: '🎨',
      name: '디자인 아이디어',
      description: '컨셉, 무드보드',
      count: '11',
      navigateTo: '/prompts/design-ideas'
    },
    {
      icon: '📺',
      name: '미디어 기획',
      description: '영상, 콘텐츠 기획',
      count: '9',
      navigateTo: '/prompts/media-planning'
    },
    {
      icon: '🎭',
      name: '크리에이티브',
      description: '캠페인, 이벤트 아이디어',
      count: '7',
      navigateTo: '/prompts/creative-campaigns'
    }
  ];

  return (
    <SubCategoryTemplate 
      categoryTitle="창의적 작업"
      subCategories={subCategories}
      mainColor="#f97316"
    />
  );
};

export default CreativeSubCategory;