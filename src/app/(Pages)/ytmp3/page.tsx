"use client";

import CardSectionYT from "@/app/components/cardSectionYT";
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
import { useState } from "react";
import { SiYoutube } from "react-icons/si";
import toast, { Toaster } from "react-hot-toast";
import { fetchData } from "@/app/redux/dataSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";


export default function DownloadMp3() {


  const [decription, setDecription] = useState<String>("");
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch<AppDispatch>()




  const searchData = ()=>{
    dispatch(fetchData(url))
  }


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

      {/* <Box mt={10}>
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
      </Box> */}

      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}
