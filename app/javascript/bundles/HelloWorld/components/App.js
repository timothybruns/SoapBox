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
      addForm: false,
    }
  }

componentDidMount() {
  this.getBookData(this.state.retrievedBookData)
  // this.showAddForm(this.state.addForm)
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

// showAddForm() {
//   fetch('/books/new')
//   .then((res) => {
//     console.log(res)
//     this.setState({
//       addForm: true,
//     })
//   })
// }


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
