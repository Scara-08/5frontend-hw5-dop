import bookListReducer from "./slices/BooksListSlice";
import postListReducer from "./slices/PostsListSlice";
import { configureStore } from "@reduxjs/toolkit"; 

const rootReducer = {
    bookList: bookListReducer,
    postList: postListReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;