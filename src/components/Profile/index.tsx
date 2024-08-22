import styles from './Profile.module.scss';
import Image from "next/image";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Image src={require('@/assets/profile-photo.svg')} alt={'user profile photo'} className={styles.profile__photo}/>

      <p className={styles.profile__user_name}>Sam Wheeler</p>
      <p className={styles.profile__user_email}>samwheeler@example.com</p>
    </div>
  )
}

export default Profile;
