import styles from './SmallGraph.module.scss';
import type {SmallGraphProps} from "./SmallGraph.types";
import {ShadowBox, Tooltip} from "@/components";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});

export const SmallGraph = ({data}: SmallGraphProps) => {

  return (
    <ShadowBox>
      <div className={styles.small_graph}>
        <span className={styles.small_graph__title}>
          {data.label} {data.tooltip && <Tooltip label={data.tooltip} />}
        </span>

        <p className={styles.small_graph__metric}>
          {data.value}
          {data.total && <span className={styles.small_graph__title__span}>/{data.total}</span>}
        </p>

        <div className={styles.small_graph__chart}>
          {!!data.data.length && (
            <Chart
              width={'100%'}
              height={33}
              type={'area'}
              options={{
                chart: {
                  id: "basic-bar",
                  toolbar: {show: false},
                  sparkline: {enabled: true},
                },
                stroke: {
                  curve: 'smooth',
                  width: 2,
                },
                tooltip: {enabled: false},
                fill: {colors: ['#0062FF', '#FFFFFF']},
              }}
              series={[{data: data.data}]}
            />
          )}
        </div>
      </div>
    </ShadowBox>
  )
}

export default SmallGraph;
