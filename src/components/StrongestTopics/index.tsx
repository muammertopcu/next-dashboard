import {Topics} from "@/components";

const data = [
  {
    image: 'https://picsum.photos/50/30?random=1',
    name: 'Covid Protocols',
    value: 95
  },
  {
    image: 'https://picsum.photos/50/30?random=2',
    name: 'Cyber Security Basics',
    value: 92
  },
  {
    image: 'https://picsum.photos/50/30?random=3',
    name: 'Social Media Policies',
    value: 89
  }
]

const WeakestTopics = () => {
  return (
    <Topics title={'Strongest Topics'} data={data} variant={'green'} />
  )
}

export default WeakestTopics;
