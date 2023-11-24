'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Image,
  Box
} from '@chakra-ui/react'
// import Link from 'next/link'

import {useRouter} from 'next/navigation'


export default function Homepage() {

  const route =useRouter()

  return (
    <Container maxW={'5xl'}>
         
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={800}
          fontSize={{ base: '3xl', sm: '2xl', md: '5xl' }}
          lineHeight={'110%'}>
            Your Ultimate {' '}
          <Text as={'span'} color={'orange.400'}>
          YouTube  MP3 Downloader
          </Text>

        
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'} fontSize={'lg'}>
        Enhance Your Music Experience - Effortlessly Convert YouTube  Videos to MP3s. <br />
         <span className='font-bold ' >Your Melodies, Your Rules, Always Available!</span>

          
        </Text>
        <Box w={'full'} >
       
          <button onClick={()=> route.push('/ytmp3')} className='bg-orange-400 text-white w-[90%] py-2 px-4 rounded-xl lg:w-[50%] font-bold hover:bg-orange-500 text-xl'>
            Get Started
          </button>
        </Box>
        <Flex w={'full'} justifyContent={'center'}>
        
          <Image src='/images/header.svg' height={{ sm: '24rem', lg: '40rem' }} mt={{ base: 10, sm: 6 }}/>
        </Flex>
      </Stack>
    </Container>
  )
}