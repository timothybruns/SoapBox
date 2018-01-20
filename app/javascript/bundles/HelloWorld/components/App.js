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

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    // this.state = { name: this.props.name };
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
    debugger;
    this.setState({
      retrievedBookData: true,
      bookData: res.data.books,
    });
  })
}

  //   updateName = (name) => {
  //   this.setState({ name });
  // };

  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
