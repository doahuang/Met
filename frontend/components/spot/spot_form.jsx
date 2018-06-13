import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import RenderErrors from '../errors';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spot;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clear();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let id = this.state.id;
    let url = id ? `/spots/${id}` : '/';
    this.props.submit(this.state).then(() => this.props.history.push(url));
  }

  render() {
    if (!this.state) {
      return <Redirect to='/404' />;
    }

    let { name, imageUrl, landscape, size, price, description } = this.state;

    return (
      <div className='spot-listing-container'>
        <div className='spot-form-box'>
          <h2>{this.props.formType}</h2>
          <form>
            <div>
              <label htmlFor='name'>Name</label>
              <input id='name' onChange={this.update('name')} value={name} />
              <label htmlFor='image'>Image</label>
              <input id='image' onChange={this.update('imageUrl')} value={imageUrl} />
              <label htmlFor='landscape'>Landscape</label>
              <input id='landscape' onChange={this.update('landscape')} value={landscape} />
              <div className='number-box'>
                <div>
                  <label htmlFor='size'>Size</label>
                  <input id='size' type='number' onChange={this.update('size')} value={size} />
                </div>
                <div>
                  <label htmlFor='price'>Price</label>
                  <input id='price' type='number' onChange={this.update('price')} value={price} />
                </div>
              </div>
              <label htmlFor='description'>Description</label>
              <textarea id='description' onChange={this.update('description')} defaultValue={description} />
            </div>
          </form>
        </div>

        <div className='spot-map-container'>
          <div className='spot-map'>
            <div className='map'>
              Map component here
            </div>
            <div className='button-box'>
              <button onClick={() => this.props.history.goBack()}>Back</button>
              <button onClick={this.handleSubmit}>Looks good</button>
            </div>
            <div className='errors'> <RenderErrors errors={this.props.errors} /> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotForm);
