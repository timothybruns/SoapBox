import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ bookData }) => {
    return bookData !== null ? (
      <div className="books">
      <h2> Bookshelf </h2>
      <table>
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
              <td><Link to="/books/:id">{book.title}</Link></td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.review}</td>
            </tr>
            ))}
          <br/>
          <Link to="/books/new">Add a book</Link>
        </tbody>
      </table>
      </div>
      ) : (
      <p> Loading ... </p>
    );
  };

export default BookList;
