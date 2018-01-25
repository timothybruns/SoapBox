import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import BookReview from './BookReview'

const BookList = ({ bookData }) => {
    return bookData !== null ? (
      <div className="booklist">
        <h2> Bookshelf </h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
            {bookData.map((book, index) => (
              <tr key={index} book={book}>
                <td><Link to={`/books/${book.id}`}>{book.title}</Link></td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
              </tr>
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
