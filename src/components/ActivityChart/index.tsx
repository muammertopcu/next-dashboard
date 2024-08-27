import dynamic from 'next/dynamic'
import moment from "moment";
import {ShadowBox} from "@/components";
import {useEffect, useMemo, useState} from "react";
import type {Activity} from "@/type";
import {activityData} from "@/data";
import styles from './ActivityChart.module.scss';

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});

const ActivityChart = () => {
  const [filter, setFilter] = useState<'month' | 'week' | 'day'>('month');
  const [data, setData] = useState<Activity[]>(activityData.month);

  useEffect(() => {
    setData(activityData[filter]);
  }, [filter]);

  const labels = useMemo(() => {
    const format = filter === 'day' ? 'HH:mm' : 'DD/MM';
    return data.map((item) => moment(item.date).format(format));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <ShadowBox>
      <div className={styles.activity_chart}>
        <div className={styles.activity_chart__header}>
          <span className={styles.activity_chart__header__title}>Activity</span>
          <span className={styles.activity_chart__header__selector}>
            <select
              className={styles.activity_chart__header__selector__select}
              onChange={(e) => setFilter(e.target.value as 'month' | 'week' | 'day')}
            >
              {Object.keys(activityData).map((key) => <option key={key} value={key}>{key}</option>)}
            </select>
          </span>
        </div>

        <Chart
          height={320}
          type={'bar'}
          options={{
            chart: {toolbar: {show: false}},
            tooltip: {enabled: false},
            fill: {colors: ['#1B59F8', '#1B59F800']},
            dataLabels: {enabled: false},
            grid: {show: false},
            stroke: {width: 0},
            plotOptions: {
              bar: {
                borderRadius: 5,
                borderRadiusApplication: 'around',
                borderRadiusWhenStacked: 'all',
                horizontal: false,
                columnWidth: '10px',
                colors: {
                  backgroundBarColors: ['#F2F7FF'],
                  backgroundBarOpacity: 0.5,
                  backgroundBarRadius: 5,
                },
              },
            },
            xaxis: {categories: labels},
          }}
          series={[{data: data.map((item) => item.value)}]}
        />
      </div>
    </ShadowBox>
  )
}

export default ActivityChart;
