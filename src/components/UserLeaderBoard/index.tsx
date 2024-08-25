import {LeaderBoard} from "@/components";
import {useEffect, useState} from "react";
import type {User} from "@/type";
const UserLeaderBoard = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/data/user.json')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <LeaderBoard title={'User Leaderboard'} data={users} />
  )
}

export default UserLeaderBoard;
