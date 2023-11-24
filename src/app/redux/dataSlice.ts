import { ErrorToast } from "@/utils/CustomToast";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
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
}


const initialState = {
    data: [] as Data,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",

} as UsersState



export const fetchData = createAsyncThunk(
    'api/fetchData', async (arg: string, { rejectWithValue }) => {

        const regex = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
        const match = arg.match(regex);
        const videoId = match ? match[1] : null;
        
        const options = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: {id: `${videoId}`},
            headers: {
              'X-RapidAPI-Key': '4946a6b3dbmsh470bc27f05c6116p1fa079jsne42699169e20',
              'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }
          };

        try {
           
            if (!videoId) ErrorToast('Invalid URL')
            else {
                const { data } = await axios.request(options)
                console.log(data);
                return data
            }


        } catch (error: any) {
            console.log(error.response.data);
            
            rejectWithValue(error.response.data)
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
                state.data = action?.payload
            })
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload as string
                // console.log(state.message);
                
            })
    }

})

export const { } = dataSlice.actions
export default dataSlice.reducer