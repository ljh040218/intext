"use client";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./SettingsPage.module.css";
import SettingsHeader from "./SettingsHeader";
import UserProfile from "./UserProfile";
import SettingsMenu from "./SettingsMenu";

function SettingsPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("로그아웃 클릭");
    navigate("/login");
  };

  const handleMenuClick = (menuType) => {
    console.log(`${menuType} 클릭`);
    switch(menuType) {
      case 'profile':
        navigate("/profile/edit");
        break;
      case 'email':
        break;
      case 'password':
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsWrapper}>
        <SettingsHeader />
        <section className={styles.contentCard}>
          <UserProfile />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70c82a6785c6d27eb5eb7e3312db56f564b5fe2f?placeholderIfAbsent=true&apiKey=2e820cafffd64e6ba3cbc3a41124fd94"
            className={styles.dividerImage}
            alt=""
          />
          <SettingsMenu onMenuClick={handleMenuClick} onLogout={handleLogout} />
        </section>
        
        {/* 하단 네비게이션 */}
        <footer className={styles.bottomNavigation}>
          <Link to="/" className={styles.navItem}>
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </Link>
          <Link to="/search" className={styles.navItem}>
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </Link>
          <Link to="/saved" className={styles.navItem}>
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </Link>
          <Link to="/profile" className={styles.navItem + ' ' + styles.active}>
            <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default SettingsPage;