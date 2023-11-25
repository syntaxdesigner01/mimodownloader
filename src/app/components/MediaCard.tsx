import Image from 'next/image';
import { useSelector } from 'react-redux'

export default function MediaCard() {

  const data =useSelector((state:any) => state?.data);

  

  return (
    <div>
      <div>
        <img src={data?.thumbnail} alt='' />
      </div>
      <div>{data?.title}</div>
      <button> <a href={data?.link} download={`mimoapp-${data?.title}`}> download</a></button>
    </div>
  )
}
