import {ProgressBar, ShadowBox} from "@/components";
import styles from './Topics.module.scss';
import Image from "next/image";
import {TopicsProps} from "./Topics.types";

const Topics = ({title, data, variant = 'default'}: TopicsProps) => {
  return (
    <ShadowBox>
      <div className={styles.weakest_topics}>
        <span className={styles.weakest_topics__title}>{title}</span>

        <div className={styles.weakest_topics__content}>
          {data.map((topic, index) => (
            <div key={index} className={styles.weakest_topics__content__item}>
              <div className={styles.weakest_topics__content__item__image}>
                <Image
                  src={topic.image}
                  alt={topic.name}
                  width={50}
                  height={32}
                />
              </div>

              <div className={styles.weakest_topics__content__item__details}>
                <span className={styles.weakest_topics__content__item__details__name}>{topic.name}</span>

                <div className={styles.weakest_topics__content__item__details__progress}>
                  <ProgressBar value={topic.value} variant={variant}/>
                  <span className={styles.weakest_topics__content__item__details__progress__value}>
                    {topic.value}% <span>Correct</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShadowBox>
  )
}

export default Topics;
