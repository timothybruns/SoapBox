import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import BookReview from './BookReview'

const BookList = ({ bookData }) => {
    return bookData !== null ? (
      <div className="booklist">
        <h1 className="contentHeader"> Bookshelf </h1>
        <body>
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
            <Link className="newBook" to="/books/new">Add a book</Link>
          </body>
      </div>
      ) : (
      <div className="loading">
        <p> Loading ... </p>
      </div>
    );
  };

export default BookList;
