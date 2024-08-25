'use client';

import {ActivityChart, Dropdown, SmallGraph, StrongestTopics, WeakestTopics} from "@/components";
import styles from './Reports.module.scss';
import {useEffect, useState} from "react";

const Reports = () => {
  const [smallGraphData, setSmallGraphData] = useState([]);

  useEffect(() => {
    fetch('/data/graphs.json')
      .then(response => response.json())
      .then(data => setSmallGraphData(data));
  }, []);

  const handleTimeframeSelect = (option: string) => {
    console.log('Selected timeframe:', option);
  };

  const handlePeopleSelect = (option: string) => {
    console.log('Selected people:', option);
  };

  const handleTopicSelect = (option: string) => {
    console.log('Selected topic:', option);
  };

  return (
    <article className={styles.reports}>
      <div className={styles.reports___header}>
        <Dropdown
          label="Timeframe"
          options={['Last 7 Days', 'This Month', 'This Year', 'Custom']}
          onSelect={handleTimeframeSelect}
        />
        <Dropdown
          label="People"
          options={['All Users', 'Managers', 'Trainers']}
          onSelect={handlePeopleSelect}
        />
        <Dropdown
          label="Topic"
          options={['All', 'Food Safety', 'Covid Protocols']}
          onSelect={handleTopicSelect}
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
      </div>
    </article>
  );
}

export default Reports;
