import dynamic from 'next/dynamic'
import moment from "moment";
import {ShadowBox} from "@/components";
import {useEffect, useState} from "react";
import type {Activity} from "@/type";
import styles from './ActivityChart.module.scss';
import Image from "next/image";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});

const ActivityChart = () => {
  const [data, setData] = useState<Activity[]>([]);

  useEffect(() => {
    fetch('/data/activity.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <ShadowBox>
      <div className={styles.activity_chart}>
        <div className={styles.activity_chart__header}>
          <span className={styles.activity_chart__header__title}>Activity</span>
          <span className={styles.activity_chart__header__selector}>
            Month <Image src={require('@/assets/arrow-down.svg')} alt={''} />
          </span>
        </div>

        <Chart
          height={320}
          type={'bar'}
          options={{
            chart: {toolbar: {show: false}},
            tooltip: {enabled: false},
            fill: {colors: ['#1B59F8', '#1B59F8']},
            dataLabels: {enabled: false},
            plotOptions: {
              bar: {
                columnWidth: '10px',
                colors: {
                  backgroundBarColors: ['#F2F7FF'],
                  backgroundBarOpacity: 0.5,
                },
              },
            },
            xaxis: {categories: data.map((item) => moment(item.date).format('MMM'))},
          }}
          series={[{data: data.map((item) => item.value)}]}
        />
      </div>
    </ShadowBox>
  )
}

export default ActivityChart;
