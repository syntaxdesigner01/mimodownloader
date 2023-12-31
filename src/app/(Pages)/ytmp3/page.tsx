"use client";

import MediaCard from "@/app/components/MediaCard";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, Box, Flex, Text, Heading, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { SiYoutube } from "react-icons/si";
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

  console.log(status);

  const searchData = () => {
    if (url.trim().length !== 0) dispatch(fetchData(url));
  };

  return (
    <div className="flex flex-col mt-[5%] w-full items-center justify-center">

      <Box w={"full"}>
        {/* logo  */}
        <Heading textAlign={"center"} mt={10} mb={2}>
          <Flex alignItems={"center"} gap={2} justifyContent={"center"}>
            <Text>Youtube</Text>
            <SiYoutube className={"text-red-500"} />
          </Flex>
        </Heading>

        {/* decription text */}
          {/* error message */}
        {data?.status === 'fail' ? <p className="text-red-500 text-center">Long audio of more than 2 hr duration are not allowed</p> :""}


        <Flex
          w={"full"}
          mt={4}
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ base: 4, md: 1 }}
          flexDirection={{ base: "column", md: "row" }}
        >
          {/* search box */}
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
        {/* search box end */}
      </Box>

      <Box mt={10}>
        {loading ? (
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
        ) : 
          "" 
        }
      </Box>

      {status === 'fulifiled' && <Box className="mt-[2%]">
              <MediaCard />
            </Box>}

      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}
