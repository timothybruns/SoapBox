import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BookList from './BookList';

// const BookReview = (props) => {
//    const findBook = (id) =>  props.bookData.filter(book => book.id == id)
//    const id = props.currentId
//    const book = findBook(id)
//      // console.log(book[0].id == props.currentId)
//      // console.log(book[0].review)
//      console.log(props.deleteBook)
//   return (
//     <div className="bookReview">
//       <h1> This is a book review </h1>
//       <h2> {book[0].title} </h2>
//       <h3> {book[0].review} </h3>
//     </div>
//   );
// };

class BookReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book:  [],
      id: null,
      title: '',
      review: '',
      deleted: false,
    };
      this.handleDelete = this.handleDelete.bind(this);
  }


    componentDidMount() {
      const bookData = this.props.bookData
      const findBook = (id) =>  bookData.filter(book => book.id == id)
      const id = this.props.currentId
      const book = findBook(id)
        this.setState({
          book: book,
          id: book[0].id,
          title: book[0].title,
          review: book[0].review,
        })
      }


    handleDelete(e) {
      e.preventDefault();
      {this.props.deleteBook(this.state.id)}
      this.setState({
        deleted: true,
      })
    }

    render() {
        return (
          <div className="review">
            <h1>{this.state.title}</h1>
            <h1>{this.state.review}</h1>
            <button className="delete" onClick={this.handleDelete}> Delete </button>
            <button className="edit"> Edit </button>
          </div>
          );
      }
}

export default BookReview;

