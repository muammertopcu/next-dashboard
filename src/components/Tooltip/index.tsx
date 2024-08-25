import Image from "next/image";
import styles from './Tooltip.module.scss';
import type {TooltipProps} from "./Tooltip.types";

const Tooltip = ({label}: TooltipProps) => {
  return (
    <div className={styles.tooltip}>
      <Image src={require('@/assets/info.svg')} alt={''}/>

      <div className={styles.tooltip__content}>
        <p>{label}</p>
      </div>
    </div>
  )
}

export default Tooltip;
