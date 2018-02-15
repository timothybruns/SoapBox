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
import Login from './Login'
import Footer from './Footer'


export default class App extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  constructor(props) {
    super(props);
    this.state = {
      retrievedBookData: false,
      bookData: null,
      userId: null,
      userLoggedIn: false,
      // retrievedUserBookData: false,
      // showBookForm: false,
    }
    this.bookSubmit = this.bookSubmit.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.editBook = this.editBook.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.getBookData = this.getBookData.bind(this);
    // this.getUserBooks = this.getUserBooks.bind(this);
  }

componentDidMount() {
  this.getBookData()
}


userLogin(event, data) {
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.success) {
          this.getBookData(res.user_id);
          this.setState({
            userLoggedIn: true,
            userId: res.user_id
          })
        } else {
          alert('Login failed!')
          // this.getBookData()
        }
  });
}

// getUserBooks(e, data, user_id) {
//   debugger;
//   fetch(`/api/books/by_user/${user_id}`)
//   .then(res => res.json())
//   .then((res) => {
//     // debugger
//     this.setState({
//       retrievedUserBookData: true,
//       bookData: res.data.books,
//     });
//   })
// }

getBookData(user_id) {
  fetch(`/api/books?user_id=${user_id}`)
  .then(res => res.json())
  .then((res) => {
    // debugger
    this.setState({
      retrievedBookData: true,
      bookData: res.data.books,
    });
  })
}

bookSubmit(event, data, user_id) {
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
        this.getBookData(this.state.userId);
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
      this.getBookData(e, data, this.state.userId);
    });
}


deleteBook(e, data, id) {
  fetch(`/api/books/${id}`, {
    method: 'DELETE',
  }).then(res => res.json())
    .then(res => {
        this.getBookData(this.state.userId);
    });
  }


  render() {
    return (
    <div className="app">
      <BrowserRouter>
        {this.state.userLoggedIn === false ? (
            <div className="login">
              <Login
              userLogin = {this.userLogin}
              userId = {this.state.userId}
              />
              <Footer />
            </div>
        ) : (
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
                    userId = {this.state.userId}
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
        )}
      </BrowserRouter>
    </div>
    );
  }
}
