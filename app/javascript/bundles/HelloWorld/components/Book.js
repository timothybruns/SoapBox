import React from 'react';
import { Redirect } from 'react-router-dom';

const Book = ({ bookData }) => {
  return (
    <div className="home">
        <h2> This is a book </h2>
    </div>
    )
  };

// class Book extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       book: [],
//       id: null,
//       editButtonClick: false,
//       deleted: false,
//       title: '',
//       author: '',
//       genre: '',
//       review: '',
//     };
//     this.handleDelete = this.handleDelete.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.showEditForm = this.showEditForm.bind(this);
//   }


//   handleDelete(e) {
//     e.preventDefault();
//     {this.props.deleteBook(this.state.book[0].id)}
//     this.setState({
//       deleted: true,
//     })
//   }

//   handleChange(e) {
//     const name = e.target.name;
//     const val = e.target.value;
//     this.setState({
//       [name]: val,
//     });
//   }

//   showEditForm() {
//     this.setState({
//       editButtonClick: true,
//     })
//   }

//   handleEdit(e) {
//     e.preventDefault();
//       {this.props.editBook(e, this.state, this.state.id)}
//   }

//   render() {
//     console.log('hi')
//     return (
//                 <div className="bookInfo">
//                    <h3>{this.state.book[0].title}</h3>
//                    <h3>{this.state.book[0].author}</h3>
//                    <h3>{this.state.book[0].genre}</h3>
//                    <h3>{this.state.book[0].review}</h3>
//                   <br />
//                     <button className="delete" onClick={this.handleDelete}> Delete </button>
//                     <button className="edit" onClick={this.showEditForm}> Edit </button>
//                     <Redirect to="/" />
//                 </div>
//             )}


    //   <div className="edit">
    //       <form onSubmit={this.handleEdit}>
    //         <input className="editTitle" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
    //           <br />
    //         <input className="editAuthor" type="text" name="content" value={this.state.author} onChange={this.handleChange} />
    //           <br />
    //         <input className="editGenre" type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
    //           <br />
    //         <input className="editReview" type="textarea" name="review" value={this.state.review} onChange={this.handleChange} />
    //           <br />
    //         <input type="submit" value="Edit" />
    //       </form>
    //   </div>
    //       )}
    // </div>


export default Book;
