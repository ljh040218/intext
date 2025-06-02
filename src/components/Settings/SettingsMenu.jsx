import styles from "./SettingsPage.module.css";
import 유저 from "./USER.svg";
import 메세지 from "./message.svg";
import 열쇠 from "./lock.svg";
import 로그아웃 from "./logout.svg";

function SettingsMenu({ onMenuClick, onLogout }) {
  return (
    <nav className={styles.menuContainer}>
      <div className={styles.menuItem} onClick={() => onMenuClick('profile')}>
        <img
          src={유저}
          className={styles.menuIcon}
          alt=""
        />
        <span className={styles.menuText}>프로필 수정</span>
      </div>
      <div className={styles.menuItem} onClick={() => onMenuClick('email')}>
        <img
          src={메세지}
          className={styles.menuIcon}
          alt=""
        />
        <span className={styles.menuText}>이메일 변경</span>
      </div>
      <div className={styles.menuItem} onClick={() => onMenuClick('password')}>
        <img
          src={열쇠}
          className={styles.menuIcon}
          alt=""
        />
        <span className={styles.menuText}>비밀번호 변경</span>
      </div>
      <div className={styles.logoutItem} onClick={onLogout}>
        <img
          src={로그아웃}
          className={styles.menuIcon}
          alt=""
        />
        <span className={styles.logoutText}>로그아웃</span>
      </div>
    </nav>
  );
}

export default SettingsMenu;