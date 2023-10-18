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
import Link from 'next/link'

// const Illustration = (props: IconProps) => {
//   return (
//     <Icon
//       width="100%"
//       viewBox="0 0 702 448"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}>
     
//     </Icon>
//   )
// }

export default function Header() {
  return (
    <Container maxW={'5xl'}>
         
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={800}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Download MP3 {' '}
          <Text as={'span'} color={'orange.400'}>
          Of your favourite vidoes 
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your meetings and
          receive smart reminders in appropriate times. Read your smart “Daily Agenda”
          every morning.

          
        </Text>
        <Box w={'full'} >
       
          <Button as={Link} href={'/Pages/DownloadMp3'} rounded={'full'} colorScheme='orange' px={4} py={2} w={{base:'90%',md:'50%'}} bg={'orange.400'}>
            Get Started
          </Button>
        </Box>
        <Flex w={'full'} justifyContent={'center'}>
        
          <Image src='/images/header.svg' height={{ sm: '24rem', lg: '40rem' }} mt={{ base: 10, sm: 6 }}/>
        </Flex>
      </Stack>
    </Container>
  )
}