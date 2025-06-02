import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import IphoneXBarsStatus from './IphoneXBarsStatus';
import ProfileImage from './ProfileImage';
import ProfileForm from './ProfileForm';
import './profile-edit-styles.css';

export default function ProfileEditScreen() {
  const navigate = useNavigate();
  
  // 초기값 저장
  const initialDirectWriting = true;
  const initialRecentUsage = false;
  const initialUserId = '@izixwan';
  const initialUserName = 'user';
  
  const [directWriting, setDirectWriting] = useState(initialDirectWriting);
  const [recentUsage, setRecentUsage] = useState(initialRecentUsage);
  const [userId, setUserId] = useState(initialUserId);
  const [userName, setUserName] = useState(initialUserName);
  const [hasChanges, setHasChanges] = useState(false);

  // 변경사항 감지
  useEffect(() => {
    const changed = 
      directWriting !== initialDirectWriting || 
      recentUsage !== initialRecentUsage ||
      userId !== initialUserId ||
      userName !== initialUserName;
    setHasChanges(changed);
  }, [directWriting, recentUsage, userId, userName]);

  const handleBackClick = () => {
    navigate('/profile');
  };

  const handleCompleteClick = () => {
    if (hasChanges) {
      // 여기서 실제 저장 로직을 수행
      console.log('변경사항 저장:', { 
        directWriting, 
        recentUsage, 
        userId, 
        userName 
      });
      navigate('/profile');
    }
  };

  const handleCameraClick = () => {
    console.log('카메라 버튼 클릭됨');
  };

  return (
    <div className="profile-edit-page-wrapper">
      <div className="user-container">
        <IphoneXBarsStatus />
        <Header 
          onBackClick={handleBackClick}
          onCompleteClick={handleCompleteClick}
          hasChanges={hasChanges}
        />
        <div className="content">
          <ProfileImage onCameraClick={handleCameraClick} />
          <ProfileForm 
            directWriting={directWriting}
            setDirectWriting={setDirectWriting}
            recentUsage={recentUsage}
            setRecentUsage={setRecentUsage}
            userId={userId}
            setUserId={setUserId}
            userName={userName}
            setUserName={setUserName}
          />
        </div>
      </div>
    </div>
  );
}