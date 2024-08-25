import styles from './LeaderBoard.module.scss';
import {ShadowBox} from "@/components";
import {PropsWithChildren} from "react";

interface LeaderBoardProps extends PropsWithChildren {
  title: string;
}

const LeaderBoard = ({title, children}: LeaderBoardProps) => {
  return (
    <ShadowBox>
      <div className={styles.leader_board}>
        <span className={styles.leader_board__title}>{title}</span>

        <div className={styles.leader_board__content}>
          {children}
        </div>
      </div>
    </ShadowBox>
  )
}

export default LeaderBoard;
