import React from 'react';
import { useParams } from 'react-router-dom';
import SubCategoryTemplate from './SubCategoryTemplate';

const DynamicSubCategory = () => {
    const { categoryName } = useParams();
    const categoryData = {
      'work-efficiency': {
        title: '업무 효율',
        color: '#3b82f6',
        subCategories: [
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>,
            name: '문서 작성',
            description: '기획서, 보고서, 제안서',
            count: '12',
            navigateTo: '/prompts/document-writing'},
          {icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M16.5,16H7.5L10.5,12L12.5,14.5L14.5,12L16.5,16Z" /></svg>,
            name: '회의 관련',
            description: '회의록, 안건 정리, 회의 준비',
            count: '8',
            navigateTo: '/prompts/meeting'},
          {icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>,
            name: '소통',
            description: '이메일, 메신저, 공지사항',
            count: '7',
            navigateTo: '/prompts/communication'},
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M2,2H11V11H2V2M9,4H4V9H9V4M22,13V22H13V13H22M15,15V20H20V15H15M16,8V10H14V7H9V5H16V3H18V8H16M2,13H11V22H2V13M4,15V20H9V15H4Z" /></svg>,
            name: '발표 자료',
            description: 'PPT, 프레젠테이션, 요약',
            count: '5',
            navigateTo: '/prompts/presentation'
          } ]},
      'writing-creative': {
        title: '글쓰기 & 창작',
        color: '#10b981',
        subCategories: [
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H8V4H20V16M18,6H10V8H18V6M18,10H10V12H18V10M10,14H14V16H10V14Z" /></svg>,
            name: '콘텐츠 작성',
            description: '블로그, 기사, 포스팅',
            count: '15',
            navigateTo: '/prompts/content-writing'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>,
            name: '아이디어 발상',
            description: '브레인스토밍, 주제 확장',
            count: '9',
            navigateTo: '/prompts/idea-generation'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18,22A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18M6,4H18V20H6V4M7,9H17V7H7V9M7,17H17V15H7V17M7,13H17V11H7V13Z" /></svg>,
            name: '스토리텔링',
            description: '시나리오, 스토리 구성',
            count: '6',
            navigateTo: '/prompts/storytelling'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>,
            name: '문체 개선',
            description: '교정, 윤문, 톤앤매너',
            count: '4',
            navigateTo: '/prompts/writing-improvement'
          }
        ]
      },
      'marketing-business': {
        title: '마케팅 & 비즈니스',
        color: '#ef4444',
        subCategories: [
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10,16V14H3V16H10M23,16V14H16V16H23M7,14V16H14V14H7M3,8H10V10H3V8M13,10V8H20V10H13M16,8H23V10H16V8Z" /></svg>,
            name: '광고 & 카피',
            description: '광고 문구, 슬로건, 헤드라인',
            count: '11',
            navigateTo: '/prompts/advertising-copy'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M12,8H6V10H12V8Z" /></svg>,
            name: '상품 관련',
            description: '상품 설명, 리뷰 작성',
            count: '8',
            navigateTo: '/prompts/product-content'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16,4C16.88,4 17.67,4.5 18,5.26L19,7H20A2,2 0 0,1 22,9V16A2,2 0 0,1 20,18H19L18,19.74C17.67,20.5 16.88,21 16,21H8C7.12,21 6.33,20.5 6,19.74L5,18H4A2,2 0 0,1 2,16V9A2,2 0 0,1 4,7H5L6,5.26C6.33,4.5 7.12,4 8,4H16M8.5,6A0.5,0.5 0 0,0 8,6.5A0.5,0.5 0 0,0 8.5,7A0.5,0.5 0 0,0 9,6.5A0.5,0.5 0 0,0 8.5,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z" /></svg>,
            name: '고객 응대',
            description: 'CS 응답, 문의 처리',
            count: '6',
            navigateTo: '/prompts/customer-service'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1L13.5,2.5L16.17,5.33L10.5,11L16,16.5L21.84,10.84L22.5,9H21M12.5,11L15,8.5L17.5,11L15,13.5L12.5,11Z" /></svg>,
            name: '브랜딩',
            description: '브랜드 스토리, 미션 비전',
            count: '3',
            navigateTo: '/prompts/branding'
          }
        ]
      },
      'learning-analysis': {
        title: '학습 & 분석',
        color: '#CD853F',
        subCategories: [
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg>,
            name: '요약 & 정리',
            description: '텍스트 요약, 핵심 추출',
            count: '18',
            navigateTo: '/prompts/summary'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>,
            name: '번역 & 언어',
            description: '번역, 언어 학습',
            count: '12',
            navigateTo: '/prompts/translation'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>,
            name: '자료 검색',
            description: '정보 수집, 리서치',
            count: '9',
            navigateTo: '/prompts/research'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z" /></svg>,
            name: '데이터 분석',
            description: '통계 해석, 인사이트 도출',
            count: '4',
            navigateTo: '/prompts/data-analysis'
          }
        ]
      },
      'development-tech': {
        title: '개발 & 기술',
        color: '#BE94D8',
        subCategories: [
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z" /></svg>,
            name: '코드 작성',
            description: '함수 생성, 알고리즘',
            count: '22',
            navigateTo: '/prompts/code-writing'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>,
            name: '디버깅 & 리뷰',
            description: '오류 수정, 코드 검토',
            count: '14',
            navigateTo: '/prompts/debugging'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>,
            name: '문서화',
            description: 'API 문서, 주석 작성',
            count: '8',
            navigateTo: '/prompts/documentation'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.98C19.47,12.66 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.49,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.51,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.51,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.49,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98Z" /></svg>,
            name: '설계 & 아키텍처',
            description: '시스템 설계, DB 구조',
            count: '5',
            navigateTo: '/prompts/architecture'
          }
        ]
      },
      'creative-work': {
        title: '창의적 작업',
        color: '#f97316',
        subCategories: [
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" /></svg>,
            name: '이미지 생성',
            description: 'AI 이미지 프롬프트',
            count: '16',
            navigateTo: '/prompts/image-generation'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4,16.6L4.8,12L6.2,10.6L9.4,13.8L17.8,5.4L19.2,6.8L9.4,16.6M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" /></svg>,
            name: '디자인 아이디어',
            description: '컨셉, 무드보드',
            count: '11',
            navigateTo: '/prompts/design-ideas'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18,3V5H16V3M20.5,17.5L15.5,12.5L17,11L22,16M7,3V5H5V3M12,3V5H10V3M19,7V21H5V7H7V9H17V7M11,11V13H9V11M15,11V13H13V11M11,15V17H9V15M15,15V17H13V15" /></svg>,
            name: '미디어 기획',
            description: '영상, 콘텐츠 기획',
            count: '9',
            navigateTo: '/prompts/media-planning'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2L13.09,8.26L22,9L14.74,13.09L17,22L12,17L7,22L9.26,13.09L2,9L10.91,8.26L12,2Z" /></svg>,
            name: '크리에이티브',
            description: '캠페인, 이벤트 아이디어',
            count: '7',
            navigateTo: '/prompts/creative-campaigns'
          }
        ]
      },
      'communication-counseling': {
        title: '소통 & 상담',
        color: '#97A3D9',
        subCategories: [
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,3C6.5,3 2,6.58 2,11C2.05,13.15 3.06,15.17 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.81,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3Z" /></svg>,
            name: '고민 상담',
            description: '개인 고민, 관계 상담',
            count: '24',
            navigateTo: '/prompts/counseling'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V8A2,2 0 0,1 4,6H8V4A2,2 0 0,1 10,2M14,6V4H10V6H14Z" /></svg>,
            name: '취업 & 면접',
            description: '자기소개서, 면접 준비',
            count: '18',
            navigateTo: '/prompts/job-interview'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25Z" /></svg>,
            name: '네트워킹',
            description: '인맥 관리, 소개팅 대화',
            count: '10',
            navigateTo: '/prompts/networking'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M13,17H11V15H13V17M13,13H11V7H13V13Z" /></svg>,
            name: '갈등 해결',
            description: '중재, 협상, 설득',
            count: '4',
            navigateTo: '/prompts/conflict-resolution'
          }
        ]
      },
      'quality-control': {
        title: '품질 관리',
        color: '#f59e0b',
        subCategories: [
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,12.1 14.3,12.6 13.7,12.6H10.3C9.7,12.6 9.2,12.1 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V10.8C10.5,11.1 10.7,11.3 11,11.3H13C13.3,11.3 13.5,11.1 13.5,10.8V9.5C13.5,8.7 12.8,8.2 12,8.2Z" /></svg>,
            name: '거짓정보 방지',
            description: '팩트체크 요청, 검증',
            count: '15',
            navigateTo: '/prompts/misinformation-prevention'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10,17L5,12L6.41,10.59L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>,
            name: '사실 확인',
            description: '정보 검증, 신뢰도 체크',
            count: '12',
            navigateTo: '/prompts/fact-checking'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.98C19.47,12.66 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.49,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.51,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.51,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.49,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98Z" /></svg>,
            name: '프롬프트 최적화',
            description: '성능 개선, 효율성',
            count: '10',
            navigateTo: '/prompts/prompt-optimization'
          },
          {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A2,2 0 0,1 14,4V6A10,10 0 0,1 23,15A1,1 0 0,1 22,16H2A1,1 0 0,1 1,15A10,10 0 0,1 10,6V4A2,2 0 0,1 12,2M12,4V6.29C8.03,6.82 5,10.1 5,14H19C19,10.1 15.97,6.82 12,6.29V4M7,18A1,1 0 0,0 6,19A1,1 0 0,0 7,20H17A1,1 0 0,0 18,19A1,1 0 0,0 17,18H7Z" /></svg>,
            name: '품질 평가',
            description: '결과 검토, 개선점 도출',
            count: '6',
            navigateTo: '/prompts/quality-assessment'
          }
        ]
      }
    };
  
  const currentCategory = categoryData[categoryName];

  if (!currentCategory) {
    return <div>카테고리를 찾을 수 없습니다.</div>;
  }

  return (
    <SubCategoryTemplate
      categoryTitle={currentCategory.title}
      subCategories={currentCategory.subCategories}
      mainColor={currentCategory.color}
    />
  );
};

export default DynamicSubCategory;