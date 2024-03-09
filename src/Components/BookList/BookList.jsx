import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchAllBooks from '../../store/reducers/BooksListCreator';
import BookListItem from './BookListItem';

const BookList = () => {
    const dispatch = useDispatch();
    const { books, booksError, booksStatus } = useSelector((state) => state.bookList)

    useEffect(() => {
        dispatch(fetchAllBooks());
    }, []);
    const bookCases = {
        pending: 'loading...',
        fulfilled: books?.map((book) => <BookListItem key={book.id} book={book}/>),
        rejected: booksError,
    };
  return (
    <div>{bookCases[booksStatus]}</div>
  )
}

export default BookList