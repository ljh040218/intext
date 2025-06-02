"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./InputDesign.module.css";
import StatusBar from "./StatusBar";
import SearchBar from "./SearchBar";
import ContentCard from "./ContentCard"; 

import chipIcon from "./chip.svg";

function InputDesign() {
  const [sortOrder, setSortOrder] = useState('latest'); 
  const contentItems = [
    {
      id: 1, // ID 추가
      title: "첫 번째 제목",
      description: "첫 번째 설명입니다",
      date: new Date('2024-01-01')
    },
    {
      id: 2, // ID 추가
      title: "두 번째 제목", 
      description: "두 번째 설명입니다",
      date: new Date('2024-01-15')
    },
    {
      id: 3, // ID 추가
      title: "세 번째 제목",
      description: "세 번째 설명입니다",
      date: new Date('2024-02-01')
    },
    {
      id: 4, // ID 추가
      title: "네 번째 제목",
      description: "네 번째 설명입니다",
      date: new Date('2024-02-15')
    },
    {
      id: 5, // ID 추가
      title: "다섯 번째 제목",
      description: "다섯 번째 설명입니다",
      date: new Date('2024-03-01')
    },
    {
      id: 6, // ID 추가
      title: "여섯 번째 제목",
      description: "여섯 번째 설명입니다",
      date: new Date('2024-03-15')
    },
    {
      id: 7, // ID 추가
      title: "일곱 번째 제목",
      description: "일곱 번째 설명입니다",
      date: new Date('2024-04-01')
    },
  ];

  // 정렬된 컨텐츠
  const sortedItems = [...contentItems].sort((a, b) => {
    if (sortOrder === 'latest') {
      return b.date - a.date; // 최신순
    } else {
      return a.date - b.date; // 오래된순
    }
  });

  const handleSort = () => {
    setSortOrder(prev => prev === 'latest' ? 'oldest' : 'latest');
  };

  return (
    <div className={styles.inputDesignPageWrapper}>
      <div className={styles.inputDesignContainer}>
        <StatusBar time="9:41" />

        <main className={styles.inputDesignMain}>
          <div className={styles.inputDesignTitleSection}>
            <h1 className={styles.inputDesignMainTitle}>거짓정보 방지</h1>
            <div className={styles.inputDesignFloatingChip} onClick={handleSort}>
              <img src={chipIcon} alt="정렬" />
            </div>
          </div>
          
          <SearchBar placeholder="검색" />

          <section className={styles.inputDesignContentList}>
            {sortedItems.map((item) => (
              <ContentCard
                key={item.id} // key를 ID로 변경
                itemId={item.id} // itemId prop 추가
                title={item.title}
                description={item.description}
                readMoreText="Read more"
                onArrowClick={() => console.log(`${item.title} 클릭됨`)}
              />
            ))}
          </section>
        </main>

        <footer className={styles.inputDesignBottomNavigation}>
          <Link to="/" className={styles.inputDesignNavItem} >
            <svg className={styles.inputDesignNavIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </Link>
          <Link to="/search" className={`${styles.inputDesignNavItem} ${styles.active}`}>
            <svg className={styles.inputDesignNavIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </Link>
          <Link to="/saved" className={styles.inputDesignNavItem}>
            <svg className={styles.inputDesignNavIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </Link>
          <Link to="/profile" className={styles.inputDesignNavItem}>
            <svg className={styles.inputDesignNavIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default InputDesign;