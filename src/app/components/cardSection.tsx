'use client'
import { DownloadIcon } from '@chakra-ui/icons'
import { Card, Flex, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from '@chakra-ui/react'
import Link from 'next/link';
import { Data } from '../fetchData/getYtmp3';

type CardSectionProps = {
result?: Data
}



export default function CardSection({result}:CardSectionProps) {
    // const {link,title} = result;
    const getmin:any = result ===undefined? '': result?.duration /60
    const getdecimal = String(getmin).split('.')[1]

    const min:any = result ===undefined? '': Math.floor(result?.duration /60)
    const sec:any = result ===undefined? '': Number(getdecimal)*60

    // console.log(getdecimal);
    
    return (

       <>
       {
        result===undefined ?
        <></> :
        
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
                    Title :{result?.title}
                </Text>
                <Text>Length:{min}:{sec}</Text>
            </CardBody>


            <CardFooter as={Flex} justifyContent={'center'}>
                <Link href={result?.link} download={result?.title} className='flex items-center justify-center w-full md:w-[40%] text-white py-2 rounded-md bg-black '>
                    <DownloadIcon />
                    <Text>Download</Text>
                </Link>
            </CardFooter>
        </Stack>
    </Card>
       }
       </>
    )
}
