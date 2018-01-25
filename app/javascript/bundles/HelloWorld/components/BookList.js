import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import BookReview from './BookReview'

const BookList = ({ bookData }) => {
    return bookData !== null ? (
      <div className="books">
      <h2> Bookshelf </h2>
        <table>
          <tbody>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Review</th>
              <th colSpan="4"></th>
            {bookData.map((book, index) => (
                <tr><Book key={index} book={book} /></tr>
              ))}
          </tbody>
        </table>
          <br/>
            <Link to="/books/new">Add a book</Link>
      </div>
      ) : (
      <p> Loading ... </p>
    );
  };

export default BookList;
