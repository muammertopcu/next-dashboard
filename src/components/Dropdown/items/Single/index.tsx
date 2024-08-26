import styles from './Single.module.scss';
import {useEffect, useState} from "react";
import type {SingleProps} from "./Single.types";

const Single = ({options, value, setValue}: SingleProps) => {
  const [selected, setSelected] = useState<string>(value);

  const handleOptionClick = (option: string) => {
    setSelected(option);
  };

  useEffect(() => {
    setValue(selected);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <>
      {options.map((option) => (
        <div
          key={option}
          onClick={() => handleOptionClick(option)}
          className={`${styles.item} ${selected === option ? styles.selected : ''}`}
        >
          {option}
        </div>
      ))}
    </>
  )
}

export default Single;
