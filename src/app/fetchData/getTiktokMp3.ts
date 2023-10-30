import { ErrorToast } from "@/utils/CustomToast";



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



export default async function getTiktokMp3(vidoeUrl: string): Promise<Data> {

  // const regex = /^(?:https?:\/\/)?(?:www\.)?tiktok\.com\/(?:@[\w.-]+\/video\/)?(\d+)(?:.*)?$/
  const regex = /^(?:https?:\/\/)?(?:www\.)?(?:vm\.)?tiktok\.com\/(?:@[\w.-]+\/video\/)?(\w+)(?:.*)?$/;

  // const match = vidoeUrl.match(regex);


  if (regex.test(vidoeUrl)) {
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

    } catch (error: any) {
      console.error(error);
      return error
    }
  } else {
    ErrorToast('Invaild TikTok link ❌')
  }


  // const isValidTikTokLink = (link:string) => {
  //   return tiktokLinkRegex.test(link);
  // };

  // console.log(tiktokLinkRegex.test('https://vm.tiktok.com/ZMjGR42at/'));


  // // Example usage:
  // const link1 = 'https://www.tiktok.com/@username/video/1234567890';
  // console.log(isValidTikTokLink(link1)); // Output: true

  // const link2 = 'https://tiktok.com/video/9876543210';
  // console.log(isValidTikTokLink(link2)); // Output: true

  // const link3 = 'https://www.youtube.com/watch?v=abcd1234';
  // console.log(isValidTikTokLink(link3)); // Output: false
}






