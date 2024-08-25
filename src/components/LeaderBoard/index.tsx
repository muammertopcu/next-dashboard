import styles from './LeaderBoard.module.scss';
import {ShadowBox} from "@/components";
import {PropsWithChildren} from "react";
import type {Groups, User} from "@/type";
import {ChevronRight, RankDownIcon, RankUpIcon} from "@/assets";
import Image from "next/image";

interface GroupsData extends Groups {
  image?: never
}

interface LeaderBoardProps extends PropsWithChildren {
  title: string;
  data: User[] | GroupsData[]
}

const LeaderBoard = ({title, data}: LeaderBoardProps) => {
  return (
    <ShadowBox>
      <div className={styles.leaderboard}>
        <span className={styles.leaderboard__title}>{title}</span>

        <div className={styles.leaderboard__content}>
          {data.map((item, index) => (
            <div key={item.id} className={styles.leaderboard__content__item}>
              {item.image && (
                <div className={styles.leaderboard__content__item__image}>
                  <Image src={item.image} alt={item.name} width={42} height={42}/>
                </div>
              )}

              <div className={styles.leaderboard__content__item__details}>
                <span className={styles.leaderboard__content__item__details__name}>{item.name}</span>
                <span className={styles.leaderboard__content__item__details__point}>
                  {item.points} Points {!item.image && ` / User`} {index < 3 && ` - ${item.accuracy}% Correct`}
                </span>
              </div>

              <div className={styles.leaderboard__content__item__rank}>
                <span className={styles.leaderboard__content__item__rank__number}>{item.rank}</span>

                <span className={`${styles.leaderboard__content__item__rank__icon}`}>
                {item.rankChange === 'down' && <RankDownIcon/>}
                  {item.rankChange === 'up' && <RankUpIcon/>}
              </span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.leaderboard__footer}>
          <span>View full leaderboard</span>
          <ChevronRight />
        </div>
      </div>
    </ShadowBox>
  )
}

export default LeaderBoard;
