import React from 'react';
import { Link } from 'react-router-dom';

import RenderErrors from '../errors';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clear();
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    let { username, password } = this.state;
    let { formType, quickLink, errors } = this.props;

    return (
      <div className='session-form-container'>
        <div className='form-box'>
          <div className='close-btn'>
            <span onClick={() => this.props.history.push('/')}> &times;</span>
          </div>
          <form>
            <h2>{formType}</h2>
            <input placeholder='Username'
              value={username} onChange={this.update('username')} />
            <input type='password' placeholder='Password'
              value={password} onChange={this.update('password')} />

            <div className='errors'> <RenderErrors errors={errors} /> </div>

            <button onClick={this.handleSubmit}>{formType}</button>
          </form>
          <div className='quicklink'>{quickLink}</div>
        </div>
      </div>
    );
  }
}
