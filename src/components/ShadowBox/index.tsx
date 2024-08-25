import styles from './ShadowBox.module.scss';
import type {ShadowBoxProps} from "./ShadowBox.types";

const ShadowBox = ({children}: ShadowBoxProps) => {
  return (
    <div className={styles.shadow_box}>
      {children}
    </div>
  );
}

export default ShadowBox;
