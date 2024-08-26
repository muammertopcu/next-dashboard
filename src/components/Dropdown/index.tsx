import React, {useState, useRef, useEffect} from 'react';
import Image from "next/image";
import styles from './Dropdown.module.scss';
import type {DropdownProps} from "./Dropdown.types";
import {Grouped, Single} from "@/components/Dropdown/items";

const Dropdown = ({label, options, onSelect, multiple}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    !multiple && setSelectedOption([options[0]]);

    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onSelect && onSelect(selectedOption);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>

      <button
        className={`${styles.dropdown__toggle} ${isOpen ? styles.dropdown__open : ''}`}
        onClick={toggleDropdown}
      >
        <span>
          <span className={styles.dropdown__toggle__label}>{label}: </span>
          <span className={styles.dropdown__toggle__value}>
            { selectedOption.length > 1 ? 'Multiple' : selectedOption[0] }
          </span>
        </span>

        <span className={`${styles.dropdown__toggle__arrow} ${isOpen ? styles.dropdown__toggle__open : ''}`}>
          <Image src={require('@/assets/arrow-full-down.svg')} alt={''}/>
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdown__menu}>

          <div className={styles.dropdown__menu__separator} hidden={multiple}/>

          {multiple ?
            <Grouped options={options} value={selectedOption} setValue={(value) => setSelectedOption(value)}/> :
            <Single options={options} value={selectedOption[0]} setValue={(value) => setSelectedOption([value])}/>
          }
        </div>
      )}
    </div>
  );
};

export default Dropdown;
