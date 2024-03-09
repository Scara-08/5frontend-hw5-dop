import { createSlice } from '@reduxjs/toolkit';
import fetchAllPosts from '../reducers/PostsListCreator';
import bookListReducer from './BooksListSlice';

const initialState = {
    posts: [],
    postsError: '',
    postStatus: 'pending',
};

const postListSlice = createSlice({
    name: 'PostList',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.postStatus = 'fulfilled';
        });
        builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.postStatus = 'rejected';
            state.postsError = action.payload;
        });
    },
});

const postListReducer = postListSlice.reducer;
export const { setPosts } = postListSlice.actions;
export default postListReducer;



