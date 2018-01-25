import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

const BookReview = (props) => {
  console.log(props.currentId.title)
  debugger
  return (
    <div className="bookReview">
      <h1> This is a Book Review </h1>
        <p>{props.bookData[0].review}</p>
    </div>
  );
};

export default BookReview;

