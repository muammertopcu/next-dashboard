export interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}
