import styles from './Library.module.scss';
import {StrongestTopics, WeakestTopics} from "@/components";

const Library = () => {
  return (
    <div className={styles.library}>
      <WeakestTopics/>
      <StrongestTopics/>
    </div>
  );
}

export default Library;
