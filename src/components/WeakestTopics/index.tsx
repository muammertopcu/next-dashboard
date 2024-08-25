import {Topics} from "@/components";

const data = [
  {
    image: 'https://picsum.photos/50/30?random=4',
    name: 'Food Safety',
    value: 74
  },
  {
    image: 'https://picsum.photos/50/30?random=5',
    name: 'Compliance Basics Procedures ',
    value: 52
  },
  {
    image: 'https://picsum.photos/50/30?random=6',
    name: 'Company Networking',
    value: 36
  }
]

const WeakestTopics = () => {
  return (
    <Topics title={'Weakest Topics'} data={data} />
  )
}

export default WeakestTopics;
