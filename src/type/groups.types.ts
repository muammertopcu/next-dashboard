export interface Groups {
  id: string;
  name: string;
  points: number;
  accuracy: number;
  rank: number;
  rankChange: 'up' | 'down' | 'none';
}
