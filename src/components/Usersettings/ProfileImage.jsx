import profileImage from "./ProfileImage.svg";

function ProfileImage({ onCameraClick }) {
  return (
    <div className="profile-image-section">
      <div className="image-wrapper">
        <img
          src={profileImage}
          alt="프로필 사진"
          className="profile-img"
        />
        <button className="camera-btn" onClick={onCameraClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" stroke="#666666" strokeWidth="1.5"/>
            <circle cx="12" cy="13" r="3" stroke="#666666" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProfileImage;