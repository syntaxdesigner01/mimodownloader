"use client"

import CardSection from "@/app/components/cardSection"
import { SearchIcon } from "@chakra-ui/icons"
import { Input, Box, Flex, Text, Heading, Spinner, Stack, Select } from "@chakra-ui/react"
import { useState } from "react"
import { icons } from "react-icons"
import {SiTiktok,SiYoutube} from 'react-icons/si'



export default function page() {

    const [download,setDownload] = useState<String>('Youtube')
    const [Icons , setIcons] = useState<string>()

    function Choose(e:string ){
      setDownload(e)
    
    }

  return (
    <div className="flex flex-col mt-[5%] w-full items-center justify-center">

      <Box w={'full'}>
        <Heading textAlign={'center'} my={10}>
          <Flex alignItems={'center'} gap={2} justifyContent={'center'}>
          {download} {download === 'Youtube' ? <SiYoutube className={'text-red-500'} />  : <SiTiktok/> }
          </Flex>
        </Heading>

        <Flex w={'full'} alignItems={'center'} justifyContent={'center'} gap={{ base: 4, md: 1 }} flexDirection={{ base: 'column', md: 'row' }}>
          <Input type="text" px={'10px'} w={{ base: '90%', md: '40%' }} border={'2px'} placeholder="Paste link here.." />
          <button type="submit" className=" w-[70%] md:w-[10%] font-bold py-2 bg-orange-600 px-4 mx-2 rounded-md hover:text-white">
            <Flex alignItems={'center'} justifyContent={'center'} gap={1}>
              <SearchIcon fontSize={20} /> <Text>Search</Text>
            </Flex>
          </button>
        </Flex>


        <Flex justifyContent={'center'} mt={5}>
          <select className="text-white px-10 py-2 rounded-md bg-black" onChange={e =>Choose(e.target.value)} >
            <option value='Youtube' className="">Youtube To Mp3</option>
            <option value='TikTok'>TikTok</option>
          </select>
        </Flex>

      </Box>

      <Box mt={10}>
        {/* <Flex justifyContent={'center'} alignItems={'center'} gap={4}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='black'
          color='orange.500'
          size='xl'
          p={4}
        />
        <Text>Please wait..</Text>
      </Flex> */}

        <Box className="mt-[2%]">

          <CardSection />
        </Box>
      </Box>



    </div>
  )
}
