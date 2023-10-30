import { ErrorToast } from "@/utils/CustomToast";


export type Data = {
    link: string;
    title: string;
    filesize: number;
    progress: number;
    duration: number;
    status: string;
    msg: string;
}

export default async function getYtmp3(vidoeUrl: string): Promise<Data> {

    const regex = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
    const match = vidoeUrl.match(regex);
    const videoId = match ? match[1] : null;

    if (videoId !== null) {
        const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4946a6b3dbmsh470bc27f05c6116p1fa079jsne42699169e20',
                'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json() as Data;
            return result

        } catch (error: any) {
            console.error(error);
            // ErrorToast(error.msg)
            return error
        }
    } else {
        ErrorToast('Invaild Youtube link ❌')
    }
}






