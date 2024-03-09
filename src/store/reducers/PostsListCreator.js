import { createAsyncThunk } from "@reduxjs/toolkit" 
import { api2 } from "../../api";

const fetchAllPosts = createAsyncThunk('Postlist/fetchAll', async (payload, thunkApi) => {
    try{
        const response = await api2.getPosts();
        return response.data;
    } catch(err){
        return thunkApi.rejectWithValue('Sorry, try again later')
    }
});

export default fetchAllPosts;