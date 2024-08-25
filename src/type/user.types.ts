export interface User {
  id: string;
  name: string;
  points: number;
  accuracy: number;
  image: string;
  rank: number;
  rankChange: 'up' | 'down' | 'none';
}
