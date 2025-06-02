import React, { createContext, useContext, useState, useEffect } from 'react';

// Context 생성
const SavedPromptsContext = createContext();

// Provider 컴포넌트
export const SavedPromptsProvider = ({ children }) => {
  const [savedPrompts, setSavedPrompts] = useState([]);

  // 로컬 스토리지에서 저장된 프롬프트 불러오기
  useEffect(() => {
    const stored = localStorage.getItem('savedPrompts');
    if (stored) {
      try {
        setSavedPrompts(JSON.parse(stored));
      } catch (error) {
        console.error('저장된 프롬프트를 불러오는데 실패했습니다:', error);
      }
    }
  }, []);

  // 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
  }, [savedPrompts]);

  // 프롬프트 추가
  const addSavedPrompt = (prompt) => {
    const newPrompt = {
      ...prompt,
      id: Date.now(), // 고유 ID 생성
      savedAt: new Date().toISOString()
    };
    setSavedPrompts(prev => [newPrompt, ...prev]);
  };

  // 프롬프트 제거 (제목으로)
  const removeSavedPrompt = (promptTitle) => {
    setSavedPrompts(prev => prev.filter(prompt => prompt.title !== promptTitle));
  };

  // 프롬프트 제거 (ID로)
  const removeSavedPromptById = (promptId) => {
    setSavedPrompts(prev => prev.filter(prompt => prompt.id !== promptId));
  };

  // 프롬프트가 저장되어 있는지 확인
  const isPromptSaved = (promptTitle) => {
    return savedPrompts.some(prompt => prompt.title === promptTitle);
  };

  // 모든 저장된 프롬프트 삭제
  const clearAllSavedPrompts = () => {
    setSavedPrompts([]);
  };

  const value = {
    savedPrompts,
    addSavedPrompt,
    removeSavedPrompt,
    removeSavedPromptById,
    isPromptSaved,
    clearAllSavedPrompts
  };

  return (
    <SavedPromptsContext.Provider value={value}>
      {children}
    </SavedPromptsContext.Provider>
  );
};

// 커스텀 훅
export const useSavedPrompts = () => {
  const context = useContext(SavedPromptsContext);
  if (!context) {
    throw new Error('useSavedPrompts는 SavedPromptsProvider 내부에서 사용되어야 합니다.');
  }
  return context;
};

export default SavedPromptsContext;