
export type Data= {
    link: string;
    title: string;
    filesize: number;
    progress: number;
    duration: number;
    status: string;
    msg: string;
}

export default async function getTikTok(vidoeUrl:string):Promise<Data>{


    const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/?url=${vidoeUrl}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4946a6b3dbmsh470bc27f05c6116p1fa079jsne42699169e20',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json() ;
        return result

    } catch (error:any) {
        console.error(error);
        return error
    }
}





  
