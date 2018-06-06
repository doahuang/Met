import React from 'react';
import { Link } from 'react-router-dom';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state).then(() => this.props.history.push('/'));
  }

  renderErrors() {
    return (
      <ul>
        { this.props.errors.map((err, i) => <li key={i}>{err}</li>) }
      </ul>
    );
  }

  render() {
    return (
      <div className='form-container'>
        <form>
          <Link to='/'>&times;</Link>
          <h2>{this.props.formType}</h2>
          <div className='err'>{this.renderErrors()}</div>
          <input placeholder='Username' value={this.state.username}
            onChange={this.update('username')} />
          <input type='password' placeholder='Password' value={this.state.password}
            onChange={this.update('password')} />
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
          <div>{this.props.quickLink}</div>
        </form>
      </div>
    );
  }
}
