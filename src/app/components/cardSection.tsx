'use client'
import { DownloadIcon } from '@chakra-ui/icons'
import { Card, Flex, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from '@chakra-ui/react'
import Link from 'next/link';
import { Data } from '../fetchData/getYtmp3';

type CardSectionProps = {
    result?: Data
}



export default function CardSection({ result }: CardSectionProps) {
  

    /**
 * This code calculates the duration in minutes and seconds based on a given result.
 * If the result is undefined, empty strings are assigned.
 * The minutes are obtained by dividing the duration by 60.
 * The decimal part of the minutes is extracted and multiplied by 60 to get the seconds.
 * The first and second digits of the seconds are obtained as separate variables.
 */
    const getmin: any = result === undefined ? '' : result?.duration / 60
    const getdecimal = String(getmin).split('.')[1]
    const getsec1: any = result === undefined ? '' : (Number(getdecimal) * 60).toString()[0]
    const getsec2: any = result === undefined ? '' : (Number(getdecimal) * 60).toString()[1]

    const min: any = result === undefined ? '' : Math.floor(result?.duration / 60)
    const sec: any = `${getsec1}${getsec2}`

    // file size 
    const filesize:any = result === undefined ? '' : (result?.filesize /1048576).toFixed(2)



    return (

        <>
            {
                result === undefined ?
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
                            <CardBody >
                                <Text fontWeight={'extrabold'} >
                                    Title: {result?.title}
                                </Text>
                                <Text fontWeight={'extrabold'} py='2'>Length: {min}:{sec} mins</Text>
                                <Text fontWeight={'extrabold'}>file size: {filesize}mb</Text>
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
