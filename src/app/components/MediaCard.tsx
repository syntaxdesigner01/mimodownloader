import { ErrorToast } from "@/utils/CustomToast";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function MediaCard() {
  const data = useSelector((state: any) => state?.data);

  const getmin = data?.duration / 60;
  const getdecimal = String(getmin).split(".")[1];

  const getsec1 = (Number(getdecimal) * 60).toString()[0];
  const getsec2 = (Number(getdecimal) * 60).toString()[1];

  const min = Math.floor(data?.duration / 60);
  const sec = `${getsec1}${getsec2}`;

  // file size
  const filesize = (data?.filesize / 1048576).toFixed(2);
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-2 lg:flex-row lg:items-start pb-6">
      <div >
        <img src={data?.thumbnail} alt="" width={300} height={300} className="rounded-lg" />
      </div>

      <div className="px-4 pt-2 lg:pt-4 shadow-lg py-10 ">
      <div>
        <p className="font-bold text-center lg:text-lg">{data?.title}</p>
      </div>

      <div>
       <div className="">
       <p>
         Duration - {min}:{sec} mins
        </p>
        <p>File size - {filesize} mb</p>
        <p>File Type Mp3</p>
        
       </div>

        <div className=" pt-4 lg:flex justify-end">
       {
        data?.link.length > 0 ? ( <button className="bg-black text-white w-full py-3 rounded-xl font-bold lg:w-1/2" >
        <a href={data.link} download={data?.title}>
          Download Mp3
        </a>
      </button>):

      <p className="text-red-500">Sorry we could not get this audio please try another vidoe</p>

       }
        </div>
      </div>
      
      </div>
     
    </div>
  );
}
