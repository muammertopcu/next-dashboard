interface BaseDropdownProps {
  label: string;
  onSelect?: (option: string[]) => void;
  multiple?: boolean;
}

interface SingleProps extends BaseDropdownProps {
  options: string[];
  multiple?: never;
}

interface GroupedProps extends BaseDropdownProps {
  options: { label: string, options: string[] }[];
  multiple: true;
}

export type DropdownProps = SingleProps | GroupedProps;
