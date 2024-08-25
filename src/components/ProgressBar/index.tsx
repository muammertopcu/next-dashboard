import styles from './ProgressBar.module.scss';
import type {ProgressBarProps} from "./ProgressBar.types";

const ProgressBar = ({value, variant = 'default'}: ProgressBarProps) => {
  return (
    <div className={`${styles.progress} ${styles[variant]}`}>
      <div className={`${styles.progress__bar} ${styles[variant]}`} style={{width: `${value}%`}} />
    </div>
  );
}

export default ProgressBar;
