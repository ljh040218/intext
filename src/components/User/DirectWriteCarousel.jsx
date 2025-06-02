import { useState, useRef, useEffect } from 'react';

function CarouselCard({ title, description, linkText, onClick }) {
  return (
    <article className="carousel-card" onClick={onClick}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-link-wrapper">
          <span className="card-link-text">
            {linkText}
          </span>
        </div>
      </div>
    </article>
  );
}

function DirectWriteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const trackRef = useRef(null);
  
  const cardWidth = 310; 
  
  const prompts = [
    {
      id: 1,
      title: "도감 등록 완료! 당신은 어떤 포켓몬인가요?",
      description: "만약 당신이 포켓몬 도감에 등록된다면? 예를 들어, 루카리오는 조용한 절벽 위에서 명상하는 모습이 자주 관찰되며, 감정의 파동을 감지해 주변의 기운을 읽는다고 알려져 있죠. 주요 기술로는 ‘마음의 눈’, ‘파동탄’. 깊은 유대와 결단이 진화 조건이 되기도 합니다.\n\n이 프롬프트에서는 당신만의 설정을 가진 오리지널 포켓몬으로 자신을 표현합니다. 주 기술, 출몰 지역, 트레이너와의 관계, 진화 조건 등 당신의 세계관을 마음껏 상상해보세요. 진짜 포켓몬처럼, 아니 루카리오처럼요.",
      linkText: "Read more"
    },
    {
      id: 2,
      title: "루카리오와 나, 오라로 이어진 이야기",
      description: "파동을 감지하고 전투에 뛰어난 루카리오는 많은 팬들의 마음 속 깊은 유대를 상징하는 포켓몬입니다. '처음 만났을 때 나는 아직 미숙한 트레이너였고, 루카리오는 어린 리오르였다.  ' 이런 식으로 루카리오와 주인공 간의 관계성에 초점을 맞춘 이야기나 회상을 적어보세요. 애니 속 ‘세레비의 나무’처럼 과거와 현재를 넘나드는 설정도 좋습니다. 단순한 배틀 파트너를 넘어서 하나의 운명으로 이어진 듯한 이야기를 써보세요.",
      linkText: "Read more"},
    {
      id: 3,
      title:  "그 날, 레드와 눈이 마주쳤다",
      description: "조용한 설산 위 고요한 눈발 속에서 기다리고 있던 레드. 눈을 마주친 순간, 당신은 포켓몬들과 함께 마지막 결전을 시작합니다. 이 프롬프트는 상대(예: 난천, 오박사 등), 장소, 당신의 파티를 입력하면 몰입감 있는 전투 시나리오를 생성합니다.\n\n예시 입력:\n- 마스터: 레드\n- 장소: 은빛산 정상\n- 당신의 포켓몬: 루카리오(정신력 / 파동탄), 꽁치가처넌(멸망의 노래) 외 4마리\n\n결과 예시:\n레드의 리자몽을 정통으로 마주한 나와 꽁치가처넌. 잠잠하던 눈보라 속, '꽁치가처넌. 멸망의 노래. 큐.' 전설은 그렇게 다시 쓰인다.",
      linkText: "Read more"
    },
    {
      id: 4,
      title: "학습 도우미",
      description: "복잡한 개념을 쉽게 설명하고, 학습 계획을 세우며, 문제 해결을 도와드립니다.",
      linkText: "Read more"
    }
  ];

  // 드래그 시작
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  // 드래그 중
  const handleMove = (clientX) => {
    if (!isDragging) return;
    
    setCurrentX(clientX);
    const diff = clientX - startX;
    const baseTranslate = -(currentIndex * cardWidth);
    const newTranslateX = baseTranslate + diff;
    setTranslateX(newTranslateX);
  };

  // 드래그 종료
  const handleEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const diff = currentX - startX;
    const threshold = 50;
    
    let newIndex = currentIndex;
    
    if (diff > threshold && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (diff < -threshold && currentIndex < prompts.length - 1) {
      newIndex = currentIndex + 1;
    }
    
    setCurrentIndex(newIndex);
  };

  // currentIndex가 변경될 때마다 translateX 업데이트
  useEffect(() => {
    const newTranslateX = -(currentIndex * cardWidth);
    setTranslateX(newTranslateX);
  }, [currentIndex, cardWidth]);

  // 마우스 이벤트
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // 터치 이벤트
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // 카드 클릭 핸들러
  const handleCardClick = (prompt) => {
    if (!isDragging) {
      console.log('Card clicked:', prompt.title);
    }
  };

  // 인디케이터 클릭 핸들러
  const handleIndicatorClick = (index) => {
    if (!isDragging) {
      setCurrentIndex(index);
    }
  };

  // 전역 마우스 이벤트 리스너
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startX, currentX, currentIndex]);

  return (
    <div className="direct-write-container">
      <div className="carousel-container">
        <div 
          ref={trackRef}
          className="carousel-track"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {prompts.map((prompt) => (
            <CarouselCard
              key={prompt.id}
              title={prompt.title}
              description={prompt.description}
              linkText={prompt.linkText}
              onClick={() => handleCardClick(prompt)}
            />
          ))}
        </div>
      </div>
      
      {/* 인디케이터 */}
      <div className="carousel-indicators">
        {prompts.map((_, index) => (
          <div 
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default DirectWriteCarousel;