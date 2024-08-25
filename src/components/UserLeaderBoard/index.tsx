import {LeaderBoard} from "@/components";
import {useEffect, useState} from "react";
import type {User} from "@/type";
import Image from "next/image";
import styles from './UserLeaderBoard.module.scss';
import {RankDownIcon, RankUpIcon} from "@/assets";
const UserLeaderBoard = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/data/user.json')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <LeaderBoard title={'User Leaderboard'}>
      <div className={styles.leaderboard}>
        {users.map((user, index) => (
          <div key={user.id} className={styles.leaderboard__user}>
            <div className={styles.leaderboard__user__image}>
              <Image src={user.image} alt={user.name} width={42} height={42}/>
            </div>

            <div className={styles.leaderboard__user__details}>
              <span className={styles.leaderboard__user__details__name}>{user.name}</span>
              <span className={styles.leaderboard__user__details__point}>
                {user.points} Points {index < 3 && ` - ${user.accuracy}% Correct`}
              </span>
            </div>

            <div className={styles.leaderboard__user__rank}>
              <span className={styles.leaderboard__user__rank__number}>{user.rank}</span>

              <span className={`${styles.leaderboard__user__rank__icon}`}>
                {user.rankChange === 'down' && <RankDownIcon />}
                {user.rankChange === 'up' && <RankUpIcon />}
              </span>
            </div>
          </div>
        ))}
      </div>
    </LeaderBoard>
  )
}

export default UserLeaderBoard;
