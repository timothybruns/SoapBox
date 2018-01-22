import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import Content from './Content';


export default class App extends React.Component {
  static propTypes = {
    // name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);
    this.state = {
      retrievedBookData: false,
      bookData: null,
    }
  }

componentDidMount() {
  this.getBookData(this.state.retrievedBookData)
}

getBookData() {
  fetch('/books')
  .then(res => res.json())
  .then((res) => {
    console.log(res)
    this.setState({
      retrievedBookData: true,
      bookData: res.data.books,
    });
  })
}


  render() {
    return (
      <div>
        <Header />
        <Content
          bookData={this.state.bookData}
        />
      </div>
    );
  }
}
