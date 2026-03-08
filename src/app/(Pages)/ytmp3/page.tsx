"use client";

import MediaCard from "@/app/components/MediaCard";
import { useState } from "react";
import { SiYoutube } from "react-icons/si";
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/icons-material/Refresh'; // Or an actual Spinner from MUI
import { Toaster } from "react-hot-toast";
import { fetchData } from "@/app/redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { ErrorToast } from "@/utils/CustomToast";

export default function DownloadMp3() {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector((state: any) => state.isLoading);
  const message = useSelector((state: any) => state.message);
  const status = useSelector((state: any) => state.status);
  const data = useSelector((state: any) => state.data);
  const success = useSelector((state: any) => state.isSuccess);

  const searchData = () => {
    if (url.trim().length !== 0) dispatch(fetchData(url));
  };

  return (
    <div className="flex flex-col mt-[5%] w-full items-center justify-center">

      <div className="w-full">
        {/* logo  */}
        <h2 className="text-3xl font-bold text-center mt-10 mb-2 flex items-center justify-center gap-2">
          <span>YouTube</span>
          <SiYoutube className="text-red-500" />
        </h2>

        {/* error message */}
        {data?.status === 'fail' ? <p className="text-red-500 text-center">Long audio of more than 2 hr duration are not allowed</p> : ""}

        <div className="w-full mt-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
          {/* search box */}
          <input
            type="search"
            className="w-[90%] md:w-[40%] px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-500 transition-colors"
            placeholder="Paste link here.."
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="w-[70%] md:w-[10%] font-bold py-3 bg-[#ff0000] text-white rounded-md hover:bg-[#cc0000] transition-colors flex items-center justify-center gap-2"
            onClick={searchData}
          >
            <SearchIcon fontSize="small" /> <span>Search</span>
          </button>
        </div>
      </div>

      <div className="mt-10">
        {loading && (
          <div className="flex justify-center items-center gap-4 text-gray-700">
            <svg className="animate-spin h-8 w-8 text-[#ff0000]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="font-medium text-lg">Please wait..</span>
          </div>
        )}
      </div>

      {status === 'fulifiled' && (
        <div className="mt-[2%]">
          <MediaCard />
        </div>
      )}

      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}
