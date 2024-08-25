export interface TopicsProps {
  title: string;
  data: Data[];
  variant?: 'default' | 'green';
}

interface Data {
  image: string;
  name: string;
  value: number;
}
