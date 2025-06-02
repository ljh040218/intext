// src/page.jsx에 Link 추가
import React from 'react';
import { Link } from 'react-router-dom';
import PromptTemplateApp from './components/Home/PromptTemplateApp';

export default function Home() {
  return (
    <div>
      {/* 임시 네비게이션 버튼들 */}
      <div style={{
        position: 'fixed', 
        top: 10, 
        right: 10, 
        zIndex: 1000,
        display: 'flex',
        gap: '8px'
      }}>
        <Link 
          to="/login" 
          style={{
            padding: '8px 16px',
            backgroundColor: '#19213d',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '14px'
          }}
        >
          로그인
        </Link>
        <Link 
          to="/saved" 
          style={{
            padding: '8px 16px',
            backgroundColor: '#19213d',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '14px'
          }}
        >
          저장됨
        </Link>
      </div>
      <PromptTemplateApp />
    </div>
  );
}