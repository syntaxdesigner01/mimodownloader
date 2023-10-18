"use client"

import { SearchIcon } from "@chakra-ui/icons"
import { Input, Box, Flex, Text, Heading, Spinner } from "@chakra-ui/react"




export default function page() {
  return (
    <div className="flex flex-col mt-[5%] w-full items-center justify-center">

      <Box w={'full'}>
        <Heading textAlign={'center'} my={10}>Youtube To Mp3</Heading>

        <Flex w={'full'} alignItems={'center'} justifyContent={'center'} gap={{ base: 4, md: 1 }} flexDirection={{ base: 'column', md: 'row' }}>
          <Input type="text" px={'10px'} w={{ base: '90%', md: '40%' }} border={'2px'} placeholder="Paste link here.." />
          <button type="submit" className=" w-[70%] md:w-[10%] font-bold py-2 bg-orange-600 px-4 mx-2 rounded-md hover:text-white">
            <Flex alignItems={'center'} justifyContent={'center'} gap={1}>
            <SearchIcon fontSize={20} /> <Text>Search</Text>
            </Flex>
          </button>
        </Flex>

       
      </Box>

      <Box  mt={10}>
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
      </Box>

    </div>
  )
}
