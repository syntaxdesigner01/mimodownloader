'use client'
import { DownloadIcon } from '@chakra-ui/icons'
import { Card, Flex, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from '@chakra-ui/react'


export default function CardSection() {
    return (

        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            // variant='filled'
            px={{ base: 10, md: 0 }}
            border={'1px'}
            borderColor={'gray.100'}
            boxShadow={'2xl'}
            rounded={'2xl'}
        >
            {/* <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
            /> */}

            <Stack>
                <CardBody fontWeight={'bold'}>
                    <Text py='2' >
                    Icona Pop - I Love It (feat. Charli XCX) [OFFICIAL VIDEO]
                    </Text>
                    <Text>Length: 11:23</Text>
                </CardBody>


                <CardFooter>
                    <button className='flex items-center justify-center w-[40%] text-white py-2 rounded-md bg-black '>
                        <DownloadIcon />
                        <Text>Download</Text>
                    </button>
                </CardFooter>
            </Stack>
        </Card>
    )
}
