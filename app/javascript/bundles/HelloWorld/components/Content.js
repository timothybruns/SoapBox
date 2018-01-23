import React from 'react';
import BookList from './BookList'

  const Content = ({ bookData }) => {
    return bookData !== null ? (
      <div className="books">
      <h2> This is book data </h2>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Review</th>
          <th colSpan="4"></th>
        </tr>
        {bookData.map((book, index) => (
          <tr key={index}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.review}</td>
          </tr>
          ))}
      </table>
      </div>
      ) : (
      <p> Loading ... </p>
    );
  };




export default Content;
