"use client"

import CardSection from "@/app/components/cardSection"
import getYtmp3, { Data } from "@/app/fetchData/getYtmp3"
import { SearchIcon } from "@chakra-ui/icons"
import { Input, Box, Flex, Text, Heading, Spinner, Stack, Select } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { SiTiktok, SiYoutube } from 'react-icons/si'
import toast, { Toaster } from 'react-hot-toast';
import { ErrorToast, SuccessToast } from "@/utils/CustomToast"
import getTiktokMp3 from "@/app/fetchData/getTiktokMp3"



export default function DownloadMp3() {


  /**
   * This code retrieves data from a YouTube video using the getYtmp3 function and logs it to the console.
   */

  // console.log(fatchData);

  const [download, setDownload] = useState<String>('Youtube')
  const [data, setData] = useState<Data>();
  const [url, setUrl] = useState('')
  const [loader, setLoader] = useState(false)



  // !url.includes('https://www.youtube.com/') || 

  const ytMp3 = async () => {
    if (url.trim().length === 0) {
      ErrorToast('Url link is empty')
    }
    else if (!url.startsWith('https://www')) {
      ErrorToast('Invaild url!')
    }
    else {
      if (navigator.onLine) {
        setLoader(true)
       
        if(download === 'Youtube'){
          const data = await getYtmp3(url);
          console.log(data);
          
          setData(data)
        }else{
          SuccessToast('Hey bear with us we are currently working on this feature')
          const data = await getTiktokMp3(url)
          console.log(data.data);
          
        }

        setLoader(false)
      } else {
        ErrorToast('You seem to be offline check your network and try again')
      }
    }
  }


  return (
    <div className="flex flex-col mt-[5%] w-full items-center justify-center">

      <Box w={'full'}>
        <Heading textAlign={'center'} my={10}>
          <Flex alignItems={'center'} gap={2} justifyContent={'center'}>
            {download} {download === 'Youtube' ? <SiYoutube className={'text-red-500'} /> : <SiTiktok />}
          </Flex>
        </Heading>


        <Flex w={'full'} alignItems={'center'} justifyContent={'center'} gap={{ base: 4, md: 1 }} flexDirection={{ base: 'column', md: 'row' }}>
          <Input type="search" px={'10px'} w={{ base: '90%', md: '40%' }} border={'2px'} placeholder="Paste link here.." onChange={e => setUrl(e.target.value)} />
          <button className=" w-[70%] md:w-[10%] font-bold py-2 bg-orange-600 px-4 mx-2 rounded-md hover:text-white" onClick={ytMp3} >
            <Flex alignItems={'center'} justifyContent={'center'} gap={1}>
              <SearchIcon fontSize={20} /> <Text>Search</Text>
            </Flex>
          </button>
        </Flex>


        <Text mt={5} textAlign={'center'} fontWeight={'semibold'}> -----select media type----- </Text>
        <Flex justifyContent={'center'} mt={2} >
          <select className="text-white px-10 py-2 rounded-md bg-black" onChange={e => setDownload(e.target.value)} >
            <option value='Youtube' className="">Youtube To Mp3</option>
            <option value='TikTok'>TikTok</option>
          </select>
        </Flex>

      </Box>

      <Box mt={10}>

        {
          loader ?

            <Flex justifyContent={'center'} alignItems={'center'} gap={4}>
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='black'
                color='orange.500'
                size='xl'
                p={4}
              />
              <Text>Please wait..</Text>
            </Flex>

            :
            <Box className="mt-[2%]">

              <CardSection result={data} />
            </Box>

        }
      </Box>

      <Toaster
        position="top-center"
        reverseOrder={true}
     
      />

    </div>
  )
}
