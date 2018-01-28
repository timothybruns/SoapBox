import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

const BookReview = (props) => {
   const findBook = (id) =>  props.bookData.filter(book => book.id == id)
   const id = props.currentId
   const book = findBook(id)
     // console.log(book[0].id == props.currentId)
     // console.log(book[0].review)
     console.log(props.deleteBook)
  return (
    <div className="bookReview">
      <h1> This is a book review </h1>
      <h2> {book[0].title} </h2>
      <h3> {book[0].review} </h3>
    </div>
  );
};



// class BookReview extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       book:  [],
//       id: null,
//       title: '',
//       review: '',
//     });

//   }

//     componentDidMount() {
//         const books = this.props.bookData
//         const book = books.filter(book => book.id == 5)
//         this.setState({
//           book: book,
//           id: book[0].id,
//           title: book[0].title,
//           review: book[0].review,
//         })
//       }

//       render() {
//           return (
//             <div className="review">
//               <h1>This is a review</h1>
//               <h1>{this.state.book[0].title}</h1>
//             </div>
//         )}

// }


export default BookReview;

