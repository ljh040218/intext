import { useNavigate } from 'react-router-dom';
import settings from "./settings.svg";
import profileImage from "./ProfileImage.svg";

function ProfileHeader() {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    console.log('환경설정 버튼 클릭됨');
    navigate('/settings');
  };

  const handleProfileEditClick = () => {
    console.log('프로필 수정 버튼 클릭됨');
    navigate('/profile/edit');
  };

  return (
    <header className="profile-header">
      <button className="settings-btn" onClick={handleSettingsClick}>
        <img src={settings} alt="Settings" className="settings-icon" />
      </button>
      
      <img
        src={profileImage}
        alt="User profile"
        className="profile-image"
      />
      <h1 className="profile-name">user</h1>
      <p className="profile-id">@izixwan</p>
      <button className="profile-edit-btn" onClick={handleProfileEditClick}>
        프로필 수정
      </button>
    </header>
  );
}

export default ProfileHeader;