


type Data = {
    code: number;
    msg: string;
    data: {
      aweme_id: string;
      region: string;
      title: string;
      cover: string;
      origin_cover: string;
      play: string;
      wmplay: string;
      music: string;
      play_count: number;
      digg_count: number;
      comment_count: number;
      create_time: number;
      author: {
        unique_id: string;
        nickname: string;
        avatar: string;
      };
    };
  };



export default async function getTiktokMp3(vidoeUrl:string):Promise<Data>{


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
        const result = await response.json() as Data;
        return result

    } catch (error:any) {
        console.error(error);
        return error
    }
}





  
