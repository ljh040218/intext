import React from 'react';

function PromptItem({ title, isSelected = false, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    // 여기서 프롬프트 상세 페이지로 이동하는 로직 추가
    console.log(`${title} 프롬프트 클릭됨`);
  };

  return (
    <div 
      className={`prompt-item ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className="prompt-item-content">
        <div className={`checkbox ${isSelected ? 'checked' : ''}`}>
          {isSelected && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span className="prompt-title">{title}</span>
      </div>
    </div>
  );
}

export default PromptItem;