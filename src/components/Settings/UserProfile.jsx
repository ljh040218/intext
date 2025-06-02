import styles from "./SettingsPage.module.css";
import profileImage from "./ProfileImage.svg";

function UserProfile() {
  return (
    <section className={styles.profileSection}>
      <img
        src={profileImage}
        alt="User profile"
      />
      <p className={styles.userName}>user</p>
    </section>
  );
}

export default UserProfile;
