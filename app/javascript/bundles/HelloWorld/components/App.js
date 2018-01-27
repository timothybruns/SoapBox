import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
// import Dashboard from './Dashboard';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
// import Home from './Home';
import BookList from './BookList';
import BookForm from './BookForm';
import Book from './Book';
import BookReview from './BookReview';
import ArticlesList from './ArticlesList';
import PodcastList from './PodcastList';


export default class App extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  constructor(props) {
    super(props);
    this.state = {
      retrievedBookData: false,
      bookData: null,
      showBookForm: false,
    }
    this.bookSubmit = this.bookSubmit.bind(this)
  }

componentDidMount() {
  this.getBookData(this.state.retrievedBookData)
}

getBookData() {
  fetch('/api/books')
  .then(res => res.json())
  .then((res) => {
    this.setState({
      retrievedBookData: true,
      bookData: res.data.books,
    });
  })
}

bookSubmit(event, data) {
  event.preventDefault();
  fetch('/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
      .then(res => {
        // console.log(res)
        this.getBookData();
    });
}

editBook(e, data, id) {
  e.preventDefault();
  fetch(`/api/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(res => {
      this.getBookData();
    });
}


deleteBook(id) {
  fetch(`/api/books/${id}`, {
    method: 'DELETE',
  }).then(res => res.json())
      .then(res => {
        this.getBlogData();
    });
  }

  render() {
    return (
    <BrowserRouter>
      <div>
        <Header />
            <main>
              <Switch>
                <Route path="/books"
                  render={props => (<BookList {...props}
                    bookData={this.state.bookData} />)
                  } exact/>
                <Route path="/books/new"
                  render={props => (<BookForm {...props}
                    bookSubmit = {this.bookSubmit}
                    />)
                  }/>
                <Route path="/books/:id"
                  render={props => (<BookReview currentId={props.match.params.id}
                    bookData={this.state.bookData}
                    deleteBook = {this.deleteBook}
                    editBook = {this.editBook}
                    />)
                  }/>
                <Route path="/articles" component={ArticlesList}/>
                <Route path="/podcasts" component={PodcastList}/>
              </Switch>
            </main>
          </div>
      </BrowserRouter>
    );
  }
}
