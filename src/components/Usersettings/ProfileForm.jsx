import { useState } from 'react';

function ProfileForm({ 
  directWriting, 
  setDirectWriting, 
  recentUsage, 
  setRecentUsage,
  userId,
  setUserId,
  userName,
  setUserName
}) {
  const [editingUserId, setEditingUserId] = useState(false);
  const [editingUserName, setEditingUserName] = useState(false);

  const handleUserIdClick = () => {
    setEditingUserId(true);
  };

  const handleUserNameClick = () => {
    setEditingUserName(true);
  };

  const handleUserIdKeyPress = (e) => {
    if (e.key === 'Enter') {
      setEditingUserId(false);
    }
  };

  const handleUserNameKeyPress = (e) => {
    if (e.key === 'Enter') {
      setEditingUserName(false);
    }
  };

  const handleUserIdBlur = () => {
    setEditingUserId(false);
  };

  const handleUserNameBlur = () => {
    setEditingUserName(false);
  };

  return (
    <div className="form-section">
      {/* 아이디 이름 변경 섹션 */}
      <div className="info-section">
        <h2 className="section-title">아이디 이름 변경</h2>
        <div className="divider"></div>
        
        <div className="info-row" onClick={handleUserIdClick}>
          <span className="label">아이디</span>
          {editingUserId ? (
            <input
              type="text"
              className="value-input"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              onKeyPress={handleUserIdKeyPress}
              onBlur={handleUserIdBlur}
              autoFocus
            />
          ) : (
            <span className="value">{userId}</span>
          )}
        </div>
        <div className="divider"></div>
        
        <div className="info-row" onClick={handleUserNameClick}>
          <span className="label">이름</span>
          {editingUserName ? (
            <input
              type="text"
              className="value-input"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyPress={handleUserNameKeyPress}
              onBlur={handleUserNameBlur}
              autoFocus
            />
          ) : (
            <span className="value">{userName}</span>
          )}
        </div>
        <div className="divider"></div>
      </div>

      {/* 공유 프롬프트 리스트 섹션 */}
      <div className="share-section">
        <h3 className="section-title">공유 프롬프트 리스트</h3>
        <p className="section-desc">선택한 프롬프트 리스트를 프로필에 공개합니다.</p>
        <div className="divider"></div>
        
        <div className="toggle-row">
          <span className="toggle-label">직접 작성</span>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={directWriting}
              onChange={(e) => setDirectWriting(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="divider"></div>
        
        <div className="toggle-row">
          <span className="toggle-label">최근 사용</span>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={recentUsage}
              onChange={(e) => setRecentUsage(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
}

export default ProfileForm;