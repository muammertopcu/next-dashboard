import styles from './People.module.scss';
import {GroupsLeaderBoard, UserLeaderBoard} from "@/components";

const People = () => {
  return (
    <div className={styles.people}>
      <UserLeaderBoard/>
      <GroupsLeaderBoard/>
    </div>
  );
}

export default People;
