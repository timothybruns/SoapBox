import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import BookList from './BookList';
import BookForm from './BookForm';
import Book from './Book';


export default class App extends React.Component {
  static propTypes = {
    // name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

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
  fetch('/books')
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
  fetch('/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
      .then(res => {
        console.log(res)
        this.getBookData();
    });
}

deleteBook(id) {
  fetch('/books/:id', {
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
          <Home />
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
                  render={props => (<Book {...props}
                    bookData={this.state.bookData}
                    deleteBook = {this.deleteBook}
                    />)
                  }/>
              </Switch>
            </main>
          </div>
      </BrowserRouter>
    );
  }
}
