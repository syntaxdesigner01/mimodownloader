"use client"

import { Input, Box, Flex, Text, Heading } from "@chakra-ui/react"



export default function page() {
  return (
    <div className="flex mt-[5%] w-full items-center justify-center">

      <Box w={'full'}>
        <Heading textAlign={'center'} my={10}>Youtube To Mp3</Heading>

        <Flex w={'full'} justifyContent={'center'} flexDirection={{ base: 'column', md: 'row' }}>
          <Input type="text" w={{ base: 'full', md: '40%' }} border={'2px'} />
          <button type="submit" className=" bg-orange-600 px-4 mx-2 rounded-sm">Search</button>
        </Flex>

      </Box>

    </div>
  )
}
