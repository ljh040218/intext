function Header({ onBackClick, onCompleteClick, hasChanges }) {
  return (
    <header className="header">
      <button className="back-btn" onClick={onBackClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <h1 className="header-title">프로필 수정</h1>
      <button 
        className={`complete-btn ${hasChanges ? 'active' : 'inactive'}`} 
        onClick={onCompleteClick}
        disabled={!hasChanges}
      >
        완료
      </button>
    </header>
  );
}

export default Header;