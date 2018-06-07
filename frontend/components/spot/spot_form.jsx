import React from 'react';

export default class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spot;
    this.submit = this.state.name ? this.props.updateSpot : this.props.createSpot;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.submit(this.state).then(this.props.history.push('/'));
  }

  render() {
    let { name, imageUrl, landscape, size, price, description } = this.state;

    return (
      <div className='spot-form-container'>
        <form onSubmit={this.handleSubmit}>
          <div><label>Name
            <input onChange={this.update('name')} value={name} /></label></div>
          <div><label>Image
            <input onChange={this.update('imageUrl')} value={imageUrl} /></label></div>
          <div><label>Landscape
            <input onChange={this.update('landscape')} value={landscape} /></label></div>
          <div><label>Size
            <input type='number' onChange={this.update('size')} value={size} /></label></div>
          <div><label>Price
            <input type='number' onChange={this.update('price')} value={price} /></label></div>
          <div><label>Description
            <textarea onChange={this.update('description')} value={description} /></label></div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
