'use client';

import {useEffect, useState} from "react";
import {
  ActivityChart,
  Dropdown,
  GroupsLeaderBoard,
  SmallGraph,
  StrongestTopics,
  UserLeaderBoard,
  WeakestTopics
} from "@/components";
import styles from './Reports.module.scss';
import {peopleOptions, timeFrameOptions, topicOptions} from "@/data";

const Reports = () => {
  const [smallGraphData, setSmallGraphData] = useState([]);

  useEffect(() => {
    fetch('/data/graphs.json')
      .then(response => response.json())
      .then(data => setSmallGraphData(data));
  }, []);

  return (
    <article className={styles.reports}>
      <div className={styles.reports___header}>
        <Dropdown label="Timeframe" options={timeFrameOptions}/>
        <Dropdown label="People" options={peopleOptions} multiple/>
        <Dropdown label="Topic" options={topicOptions}/>
      </div>

      <div className={styles.reports__contents}>
        <div className={styles.reports__contents__small_graphs}>
          {smallGraphData.map((data, index) => (
            <div key={index} className={styles.reports__contents__small_graphs__item}>
              <SmallGraph data={data}/>
            </div>
          ))}
        </div>

        <div className={styles.reports__contents__activity_graph}>
          <ActivityChart/>
        </div>

        <div className={styles.reports__contents__weakest_topics}>
          <WeakestTopics/>
        </div>

        <div className={styles.reports__contents__weakest_topics}>
          <StrongestTopics/>
        </div>

        <div className={styles.reports__contents__weakest_topics}>
          <UserLeaderBoard/>
        </div>

        <div className={styles.reports__contents__weakest_topics}>
          <GroupsLeaderBoard/>
        </div>
      </div>
    </article>
  );
}

export default Reports;
