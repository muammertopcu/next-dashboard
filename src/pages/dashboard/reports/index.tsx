'use client';

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
import {useEffect, useState} from "react";


const data = [
  {
    label: 'Groups',
    options: ['All Users  400', 'Managers  14', 'Trainers  4']
  },
  {
    label: 'Users',
    options: ['Adrian Lu', 'Evelyn Hamilton', 'Jenny Wilson']
  }
];

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
        <Dropdown
          label="Timeframe"
          options={['Last 7 Days', 'This Month', 'This Year', 'Custom']}
          onSelect={() => console.log('timeframe')}
        />
        <Dropdown
          label="People"
          options={data}
          onSelect={(options) => console.log('people', options)}
          multiple
        />
        <Dropdown
          label="Topic"
          options={['All', 'Food Safety', 'Covid Protocols']}
          onSelect={(options) => console.log('topic', options)}
        />
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
