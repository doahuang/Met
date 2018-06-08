import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { clear } from '../../actions/session';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    clear();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state).then(() => <Redirect to='/' />);
  }

  renderErrors() {
    const errors = this.props.errors.map((err, i) => (
      <li key={i}>{err}</li>
    ));
    return <ul>{errors}</ul>;
  }

  render() {
    let { username, password } = this.state;
    let { formType, quickLink } = this.props;

    return (
      <div className='session-form-container'>
        <div className='form-box'>
          <div className='close-btn'><Link to='/'>&times;</Link></div>
          <form>
            <h2>{formType}</h2>
            <input placeholder='Username'
              value={username} onChange={this.update('username')} />
            <input type='password' placeholder='Password'
              value={password} onChange={this.update('password')} />
            <div className='errors'>{this.renderErrors()}</div>
            <button onClick={this.handleSubmit}>{formType}</button>
          </form>
          <div className='quicklink'>{quickLink}</div>
        </div>
      </div>
    );
  }
}
