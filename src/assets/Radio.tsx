interface RadioProps {
  checked?: boolean;
}

const Radio = ({ checked }: RadioProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {checked && <circle cx="12" cy="12" r="6" fill="#1B59F8"/>}
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0 12C0 5.376 5.376 0 12 0C18.624 0 24 5.376 24 12C24 18.624 18.624 24 12 24C5.376 24 0 18.624 0 12ZM2.4 12C2.4 17.304 6.696 21.6 12 21.6C17.304 21.6 21.6 17.304 21.6 12C21.6 6.696 17.304 2.4 12 2.4C6.696 2.4 2.4 6.696 2.4 12Z"
            fill="#C8DBFF"/>
    </svg>
  )
}

export default Radio;
