import {useEffect, useState} from "react";
import styles from './Grouped.module.scss';
import {Close, Radio, Search} from "@/assets";

interface GroupedProps {
  options: { label: string, options: string[] }[];
  value: string[];
  setValue: (value: string[]) => void;
}

const Grouped = ({ options, value, setValue }: GroupedProps) => {
  const [dataset, setDataset] = useState(options);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string[]>(value);

  useEffect(() => {
    const filteredData = options.map((group) => {
      const options = group.options.filter((option) => option.toLowerCase().includes(search.toLowerCase()));
      return { label: group.label, options };
    });

    setDataset(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleOptionClick = (option: string) => {
    // select one option with group
    const group = dataset.find((group) => group.options.includes(option));
    if (!group) return;

    const newSelected = selected.filter((item) => !group.options.includes(item));

    setSelected([...newSelected, option]);
    setValue([...newSelected, option]);
  }

  const handleRemove = (option: string) => {
    const newSelected = selected.filter((item) => item !== option);

    setSelected(newSelected);
    setValue(newSelected);
  }

  useEffect(() => {
    setValue(selected);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className={styles.grouped}>
      <div className={styles.grouped__selected_choices}>
        {selected.map((option) => (
          <div key={option} className={styles.grouped__selected_choices__item} onClick={() => handleRemove(option)}>
            {option} <Close />
          </div>
        ))}
      </div>

      <div className={styles.grouped__search}>
        <Search />
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>

      {dataset.map((group) => {
        if (!group.options.length) return null;

        return (
          <div key={group.label} className={styles.grouped__group}>
            <div className={styles.grouped__group__label}>{group.label}</div>
            {group.options.map((option) => (
              <div key={option} className={styles.grouped__group__option} onClick={() => handleOptionClick(option)}>
                <Radio checked={selected.includes(option)} />
                <label htmlFor={option} className={styles.grouped__group__option__label}>{option}</label>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Grouped;
