import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

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

const fetchData = createAsyncThunk(
    'api/fetchData', (arg, {rejectWithValue }) => {
        try {
            const regex = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
            // const {data} = 

        } catch (error) {
                // rejectWithValue(error.response.data)
        }
    }
)

const initialState: Data = {
    title: "",
    link: "",
    thumbnail: "",
    filesize: 0,
    duration: 0,
    status: '',
    msg: ''
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: {}

})

export const { } = dataSlice.actions
export default dataSlice.reducer