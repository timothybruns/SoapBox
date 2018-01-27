import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

const BookReview = (props) => {
  console.log(props.bookData.filter(book => book.id == id))
  console.log(props)
  debugger;
  return (
    <div className="bookReview">
      <h1> This is a Book Review </h1>
    </div>
  );
};

export default BookReview;

