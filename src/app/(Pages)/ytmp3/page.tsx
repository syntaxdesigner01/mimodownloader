"use client";

import CardSectionYT from "@/app/components/cardSectionYT";
import getYtmp3, { Data } from "@/app/fetchData/getYtmp3";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  Box,
  Flex,
  Text,
  Heading,
  Spinner,
  Stack,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SiTiktok, SiYoutube } from "react-icons/si";
import toast, { Toaster } from "react-hot-toast";
import { ErrorToast, SuccessToast } from "@/utils/CustomToast";
import getTiktokMp3 from "@/app/fetchData/getTiktokMp3";
import { fetchData } from "@/app/redux/dataSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";


export default function DownloadMp3() {


  // const [download, setDownload] = useState<String>("Youtube");
  const [decription, setDecription] = useState<String>("");
  const [data, setData] = useState<Data>();
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch<AppDispatch>()




  const searchData = ()=>{
    dispatch(fetchData(url))
  }

  // const ytMp3 = async () => {
  //   if (url.trim().length === 0) {
  //     ErrorToast("Url link is empty");
  //   } else {
  //     if (navigator.onLine) {
  //       setLoader(true);

  //       if (download === "Youtube") {
  //         const data = await getYtmp3(url);
  //         console.log(data);

  //         setData(data);
  //       } else {
  //         SuccessToast(
  //           "Hey bear with us we are currently working on this feature"
  //         );
  //         const data = await getTiktokMp3(url);
  //         console.log(data?.data);
  //       }

  //       setLoader(false);
  //     } else {
  //       ErrorToast("You seem to be offline check your network and try again");
  //     }
  //   }
  // };



  return (
    <div className="flex flex-col mt-[5%] w-full items-center justify-center">
      <Box w={"full"}>
        <Heading textAlign={"center"} mt={10} mb={2}>
          <Flex alignItems={"center"} gap={2} justifyContent={"center"}>
            <Text>Youtube</Text>
            <SiYoutube className={"text-red-500"} />
          </Flex>
        </Heading>

        <Text textAlign={'center'} fontWeight={500} whiteSpace={"nowrap"} >Paste video url here 👇👇</Text>


        <Flex
          w={"full"}
          mt={4}
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ base: 4, md: 1 }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Input
            type="search"
            px={"10px"}
            w={{ base: "90%", md: "40%" }}
            border={"2px"}
            placeholder="Paste link here.."
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className=" w-[70%] md:w-[10%] font-bold py-2 bg-orange-600 px-4 mx-2 rounded-md hover:text-white"
            onClick={searchData}
          >
            <Flex alignItems={"center"} justifyContent={"center"} gap={1}>
              <SearchIcon fontSize={20} /> <Text>Search</Text>
            </Flex>
          </button>
        </Flex>
      </Box>

      <Box mt={10}>
        {loader ? (
          <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="black"
              color="orange.500"
              size="xl"
              p={4}
            />
            <Text>Please wait..</Text>
          </Flex>
        ) : (
          <Box className="mt-[2%]">
         
            <CardSectionYT result={data} />
         
          </Box>
        )}
      </Box>

      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}
