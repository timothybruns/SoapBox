import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ bookData }) => {
    return bookData !== null ? (
      <div className="books">
      <h2> This is book data </h2>
      <tbody>
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
        <Link to="/books/new">Add a book</Link>
      </tbody>
      </div>
      ) : (
      <p> Loading ... </p>
    );
  };

export default BookList;
