import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BookList from './BookList';

class BookReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book:  [],
      id: '',
      title: '',
      review: '',
      deleted: false,
      editButtonClick: false,
    };
      this.handleDelete = this.handleDelete.bind(this);
      // this.handleEdit = this.handleEdit.bind(this);
      // this.handleChange = this.handleChange.bind(this);
      this.showEditForm = this.showEditForm.bind(this);
  }


    componentDidMount() {
      const bookData = this.props.bookData
      const findBook = (id) =>  bookData.filter(book => book.id == id)
      const id = this.props.currentId
      const book = findBook(id)
      console.log(id)
        this.setState({
          book: book,
          id: book[0].id,
          title: book[0].title,
          review: book[0].review,
        })
      }


    handleDelete(e) {
      e.preventDefault();
      {this.props.deleteBook(e, this.state, this.state.id)}
      this.setState({
        deleted: true,
      })
    }

    // handleChange(e) {
    //   const name = e.target.name;
    //   const val = e.target.value;
    //   this.setState({
    //     [name]: val,
    //   });
    // }

    showEditForm() {
      console.log('hello');
      this.setState({
        editButtonClick: true,
      });
    }

    // handleEdit(e) {
    //   e.preventDefault();
    //     {this.props.editBook(e, this.state, this.state.id)}
    // }

    render() {
        return (
            <div className="review">
              <h2 className="bookTitle">{this.state.title}</h2>
              <p className="bookReview">{this.state.review}</p>
              <br/>
              <button className="delete" onClick={this.handleDelete}> Delete </button>
              <button className="edit" onClick={this.showEditForm}> Edit </button>
            </div>
        )
    }
}

export default BookReview;

