import { ErrorToast } from "@/utils/CustomToast";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Data = {
    link?: string,
    title?: string,
    filesize?: number,
    progress?: number,
    duration?: number,
    status?: string,
    msg?: string,
    thumbnail?: string,
}


interface UsersState {
    data: []
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string,
    status: 'idle' | 'fulifiled' | 'pending' | 'rejected'

}


const initialState = {
    data: [] as Data,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    status: 'idle'



} as UsersState



export const fetchData = createAsyncThunk(
    'api/fetchData', async (arg: string, { rejectWithValue }) => {

        const regex = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
        const match = arg.match(regex);
        const videoId = match ? match[1] : null;

   

        

        const options = {
            method: 'GET',
            url: 'https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/',
            params: {
                url: `${arg}`
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY }`,
                'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
            }
        };



        try {

            if (!videoId) ErrorToast('Invalid URL')
            else {
                const { data } = await axios.request(options)
                data.thumbnail = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`
                console.log(data);
                return data
            }


        } catch (error: any) {
            console.log(error);

            return rejectWithValue(error.message)
        }
    }
)


const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.status = 'fulifiled'
                state.data = action?.payload
            })
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
                state.status = 'pending'
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload as string
                state.status = 'rejected'
            })

    }

})

export const { } = dataSlice.actions
export default dataSlice.reducer