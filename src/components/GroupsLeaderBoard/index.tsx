import {LeaderBoard} from "@/components";
import {useEffect, useState} from "react";
import type {Groups} from "@/type";

const GroupsLeaderBoard = () => {
  const [groups, setGroups] = useState<Groups[]>([]);

  useEffect(() => {
    fetch('/data/groups.json')
      .then(response => response.json())
      .then(data => setGroups(data));
  }, []);

  return (
    <LeaderBoard title={'Groups Leaderboard'} data={groups} />
  )
}

export default GroupsLeaderBoard;
