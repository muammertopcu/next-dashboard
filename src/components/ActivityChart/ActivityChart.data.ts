import type {Activity} from "@/type";
import moment from "moment/moment";

const monthData: Activity[] = Array.from({length: 30}, (_, i) => ({
  id: ++i,
  name: `Activity ${i}`,
  date: moment().subtract(30 - i, 'days').toDate(),
  value: Math.floor(Math.random() * 100),
}));

const weekData: Activity[] = Array.from({length: 7}, (_, i) => ({
  id: ++i,
  name: `Activity ${i}`,
  date: moment().subtract(7 - i, 'days').toDate(),
  value: Math.floor(Math.random() * 100),
}));

const dayData: Activity[] = Array.from({length: 24}, (_, i) => ({
  id: ++i,
  name: `Activity ${i}`,
  date: moment().startOf('day').add(i, 'hours').toDate(),
  value: Math.floor(Math.random() * 100),
}));

export const dummy = {
  month: monthData,
  week: weekData,
  day: dayData,
}
