import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

const BookReview = (props) => {
  console.log(props.bookData)
  return (
    <div className="bookReview">
      <h1> This is a Book Review </h1>

    </div>
  );
};

export default BookReview;

