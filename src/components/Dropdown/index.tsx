import React, {useState, useRef, useEffect} from 'react';
import Image from "next/image";
import styles from './Dropdown.module.scss';
import type {DropdownProps} from "./Dropdown.types";

const Dropdown = ({label, options, onSelect}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>

      <button
        className={`${styles.dropdown__toggle} ${isOpen ? styles.dropdown__open : ''}`}
        onClick={toggleDropdown}
      >
        <span>
          <span className={styles.dropdown__toggle__label}>{label}: </span>
          <span className={styles.dropdown__toggle__value}>{selectedOption}</span>
        </span>

        <span className={`${styles.dropdown__toggle__arrow} ${isOpen ? styles.dropdown__toggle__open : ''}`}>
          <Image src={require('@/assets/arrow-full-down.svg')} alt={''}/>
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdown__menu}>

          <div className={styles.dropdown__menu__separator} />

          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`${styles.dropdown__menu__item} ${option === selectedOption && styles.selected}`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
