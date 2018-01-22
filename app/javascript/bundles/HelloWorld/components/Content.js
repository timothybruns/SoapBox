import React from 'react';

const Content = ({ bookData }) => {
  return bookData !== null ? (
    <div className="books">
      {bookData.map((book, index) => (
        <p key={index}>Title: {book.title} Author: {book.author}</p>
        ))}
    </div>
    ) : (
    <p> Loading ... </p>
  );
};


export default Content;
