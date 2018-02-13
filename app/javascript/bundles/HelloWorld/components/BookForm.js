import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      genre: '',
      review: '',
      submitButtonClicked: false,
      user_id: props.userId,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
};

handleChange(e) {
  const name = e.target.name;
  const val = e.target.value;
  this.setState({
    [name]: val,
  })
}

handleSubmit(e) {
    e.preventDefault();
    {this.props.bookSubmit(e, this.state)}
    this.setState({
      submitButtonClicked: true,
    });
  }

render() {
  return (
      <div>
      {this.state.submitButtonClicked == false ? (
        <form onSubmit={this.handleSubmit}>
        <label>
          <input className="submitTitle" type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} />
            <br/>
          <input className="submitAuthor" type="text" name="author" value={this.state.author} placeholder="author" onChange={this.handleChange} />
            <br />
          <input className="submitGenre" type="text" name="genre" value={this.state.genre} placeholder="genre" onChange={this.handleChange} />
            <br/>
          <textarea className="submitReview" type="textarea" name="review" value={this.state.review} placeholder="review" onChange={this.handleChange} />
          <input className="hidden" type="hidden" name="hidden" value={this.state.user_id} />
        </label>
          <br />
        <input className="submitButton" type="submit" value="Submit" />
      </form>
      ) : (
      <Redirect to="/books" />
      )}
      </div>
    );
  }
}

export default BookForm;
