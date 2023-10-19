'use client'

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/link'


interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')} px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link href={'/'}>
            <Flex alignItems={'center'} gap={2} pt={{base:0,md:10}} >
              <Image src='/icons/icon.svg' w={{base:'50px',md:'100px'}} />
              <Text fontWeight={'black'}>Mimo Downloader</Text>
            </Flex>
          </Link>


          {/* <Flex display={{base:'none',md:'flex'}} justifyContent={'space-between'} fontWeight={'bold'}  gap={10}>
            <Link href={''} ><Text fontSize={'xl'}> Home</Text> </Link>
            <Link href={''} ><Text fontSize={'xl'}>YouTube To Mp3</Text> </Link>
            <Link href={''} ><Text fontSize={'xl'}>Tiktok</Text> </Link>
          </Flex> */}

          <Flex alignItems={'center'}>
            <Box>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}