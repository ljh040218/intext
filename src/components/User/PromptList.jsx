import React, { useState } from 'react';
import PromptItem from './PromptItem';

function PromptList() {
  const [selectedItem, setSelectedItem] = useState(0); 

  const prompts = [
    { id: 1, title: '제목' },
    { id: 2, title: '제목' },
    { id: 3, title: '제목' },
    { id: 4, title: '제목' },
    { id: 5, title: '제목' }
  ];

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
    // 여기서 프롬프트 상세 페이지로 이동하는 로직 추가
    //navigate(`/prompt/${itemId}`);
  };

  return (
    <div className="prompt-list">
      {prompts.map((prompt) => (
        <PromptItem
          key={prompt.id}
          title={prompt.title}
          isSelected={selectedItem === prompt.id}
          onClick={() => handleItemClick(prompt.id)}
        />
      ))}
    </div>
  );
}

export default PromptList;