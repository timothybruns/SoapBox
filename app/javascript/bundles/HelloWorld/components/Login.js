import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginSubmitted: false,
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(e) {
  const name = e.target.name;
  const val = e.target.value;
  this.setState({
    [name]: val,
  })
}

handleSubmit(e) {
    e.preventDefault();
    {this.props.userLogin(e, this.state)}
    this.setState({
      loginSubmitted: true,
    });
  }

// handleConsole(e) {
//   e.preventDefault();
//   console.log('yep!')
// }

    render() {
        return (
        <div className="login">
          <img src="http://www.karianandbox.com/wp-content/themes/karianandbox/images/logo/karian_and_box_logo_footer.svg" width="250" height="250" alt=""></img>
            <h2 className="loginHeader">Login to SoapBox!</h2>
              <form onSubmit={this.handleSubmit}>
                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                <br />
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
                <br />
                <input type="submit"/>
              </form>
        </div>
        )
    }

}

export default Login;
