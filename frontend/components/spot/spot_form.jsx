import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spot;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.spot);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    let { name, imageUrl, landscape, size, price, description } = this.state;
    return (
      <div className='spot-form-container'>
        <div className='spot-form'>
          <h2>{this.props.formType}</h2>
          <form>
            <label>Name
              <input onChange={this.update('name')} value={name} />
            </label>
            <label>Image
              <input onChange={this.update('imageUrl')} value={imageUrl} />
            </label>
            <label>Landscape
              <input onChange={this.update('landscape')} value={landscape} />
            </label>
            <div>
              <label>Size
                <input onChange={this.update('size')} value={size} />
              </label>
              <label>Price
                <input type='number' onChange={this.update('price')} value={price} />
              </label>
            </div>
            <label>Description
              <textarea onChange={this.update('description')} value={description} />
            </label>
            <div className='button-box'>
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotForm);
