import React from 'react';

const Books = (props) => {
  return (
    <div className="bookList">
      <h2>{props.book.title}</h2>
    </div>
    )
}

export default Books;
